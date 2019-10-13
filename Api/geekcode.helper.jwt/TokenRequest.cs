using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace geekcode.helper.jwt
{
    public class TokenRequest
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [MinLength(8)]
        public string Password { get; set; }
    }
}
