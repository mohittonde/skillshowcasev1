using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace geekcode.helper.jwt
{
    public interface IUserManagmentService
    {
        User GetValidatedUser(string userName, string password);
    }

    public class UserManagmentService : IUserManagmentService
    {
        private ICollection<User> GetUsers()
        {
            return new User[] {
                new  User {_id= Guid.NewGuid().ToString(),UserName="abc@.com",Password= Hasher.ComputeSha256Hash( "abc") }
            };
        }

        public User GetValidatedUser(string userName, string password)
        {
            return GetUsers().FirstOrDefault(x => x.UserName == userName && x.Password == password);
        }
    }
}
