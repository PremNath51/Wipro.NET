using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;

namespace RestApi
{
    public interface IAppSettings
    {
        Dictionary<string, string> Store { get; }
    }

    public class AppSettings : IAppSettings
    {
        private Dictionary<string, string> _Store;

        public AppSettings(IEnumerable<KeyValuePair<string, string>> store)
        {
            var prefix = "AppSettings:";
            _Store = store.Where(p => p.Key.StartsWith(prefix)).ToDictionary(k => k.Key.Replace(prefix, string.Empty), v => v.Value);
        }

        public Dictionary<string, string> Store
        {
            get
            {
                return _Store;
            }
        }
    }
}