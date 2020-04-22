using System;
using NUnit.Framework;
using RestSharp;
using RestSharp.Authenticators;
using Angular.Controllers;
using System.Collections.Generic;

namespace IntegrationTest
{
    public class UnitTest
    {
        [Test]
        public void LoadAllTrainings()
        {
            var client = new RestClient("http://localhost:27329/api");
            RestRequest request = new RestRequest("data", Method.GET);
            IRestResponse<List<Training>> response = client.Execute<List<Training>>(request);
            Assert.True(response.Data.Count > 0);
        }
        [Test]
        [TestCase("0777", "34543777")]
        public void SaveTraining()
        {
            var client = new RestClient("http://localhost:27329/api");
            var training = new Training { TrainingName = "IntegrationTest", StartDate = DateTime.Now, EndDate = DateTime.Now.AddDays(2) };
            RestRequest restRequest = new RestRequest("data", Method.POST);
            restRequest.AddParameter("application/json", training, ParameterType.RequestBody);
            IRestResponse<Result> response = client.Execute<Result>(restRequest);
            Assert.True(response.Data.IsSuccess);
        }
    }
}
