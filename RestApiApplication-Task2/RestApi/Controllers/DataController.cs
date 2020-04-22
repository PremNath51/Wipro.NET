using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Reflection;
using System.Drawing;
using System.IO;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Web.Hosting;

namespace RestApi.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private readonly IHostingEnvironment _appEnvironment;

        public DataController(IHostingEnvironment appEnvironment)
        {
            _appEnvironment = appEnvironment;
        }

        [HttpGet]
        [ResponseCache(NoStore = true, Duration = 0, VaryByHeader = "None")]
        public IActionResult Get()
        {
            var allData = GetAllTrainings();
            var select = allData.Select(a => new { a.TrainingId, a.TrainingName, a.StartDate, a.EndDate, Difference = (a.EndDate - a.StartDate).TotalDays.ToString() }).ToList();
            return Json(select);
        }
        [HttpPost]
        [ResponseCache(NoStore = true, Duration = 0, VaryByHeader = "None")]
        public IActionResult Post([FromBody]Training training)
        {
            var allData = GetAllTrainings();
            if (training.TrainingId == 0)
            {                
                training.TrainingId = (allData.Count==0? 0 : allData.Max(a => a.TrainingId)) + 1;
                allData.Add(training);
            }
            StoreData(allData);
            return Json(new Result { Message = "Training Saved successfully. Training Id : "+ training.TrainingId, IsSuccess = true });
        }

        private List<Training> GetAllTrainings()
        {
            var data_file = _appEnvironment.WebRootPath + "//Data//TrainingData.json";
            var data = System.IO.File.ReadAllText(data_file);
            DataStore transcript_object = JsonConvert.DeserializeObject<DataStore>(data);
            return transcript_object.TrainingList;
        }
        private void StoreData(List<Training> trainings)
        {
            var data_object = new DataStore { TrainingList = trainings };
            var data_text = JsonConvert.SerializeObject(data_object, Formatting.None, new JsonSerializerSettings { ReferenceLoopHandling = ReferenceLoopHandling.Ignore, NullValueHandling = NullValueHandling.Ignore });
            var data_file = _appEnvironment.WebRootPath + "//Data//TrainingData.json";
            System.IO.File.WriteAllText(data_file, data_text);
        }

    }

    public class Result
    {
        public string Message { get; set; }
        public bool IsSuccess { get; set; }
    }
    public class Training
    {
        public int TrainingId { get; set; }
        public string TrainingName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
    public class DataStore
    {
        public List<Training> TrainingList { get; set; }
    }
}
