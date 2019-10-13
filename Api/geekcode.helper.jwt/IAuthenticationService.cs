using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security;
using System.Security.Claims;
using Microsoft.Extensions.Options;

namespace geekcode.helper.jwt
{
    public interface IAuthenticationService
    {
        bool IsAuthenticated(TokenRequest request, out string token);

    }

    public class User {
        public string _id { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }
    }

    public class TokenAuthenticationService : IAuthenticationService
    {
        private readonly IUserManagmentService userManagmentService;

        private readonly TokenManagement tokenManagement;

        public TokenAuthenticationService(IUserManagmentService userManagmentService, IOptions<TokenManagement> token)
        {
            this.userManagmentService = userManagmentService;
            this.tokenManagement = token.Value;

        }

        public bool IsAuthenticated(TokenRequest request, out string token)
        {
            token = string.Empty;
            User user = this.userManagmentService.GetValidatedUser(request.UserName, request.Password);
            if (user == null) return false;

            var claim = new[]
            {
                new Claim(ClaimTypes.Name, request.UserName),
                new Claim(ClaimTypes.Sid,user._id)
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenManagement.Secret));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var jwtToken = new JwtSecurityToken(
                tokenManagement.Issuer,
                tokenManagement.Audience,
                claim,
                expires: DateTime.Now.AddMinutes(tokenManagement.AccessExpiration),
                signingCredentials: credentials
            );
            token = new JwtSecurityTokenHandler().WriteToken(jwtToken);
            return true;

        }

        
    }

}
