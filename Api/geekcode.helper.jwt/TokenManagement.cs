using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace geekcode.helper.jwt
{
    [JsonObject("tokenManagement")]
    public class TokenManagement
    {
        [JsonProperty("secret")]
        public string Secret { get; set; }

        [JsonProperty("issuer")]
        public string Issuer { get; set; }

        [JsonProperty("audience")]
        public string Audience { get; set; }

        [JsonProperty("accessExpiration")]
        public int AccessExpiration { get; set; }

        [JsonProperty("refreshExpiration")]
        public int RefreshExpiration { get; set; }

        [JsonProperty("allowedOrigins")]
        public string[] AllowedOrigins { get; set; }

    }
}
