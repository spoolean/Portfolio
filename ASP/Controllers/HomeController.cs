using Microsoft.AspNetCore.Mvc;

namespace ASP.Controllers
{
    public class HomeController : Controller
    {
        [Route("/projects")]
        [HttpGet]
        public string GetProjects()
        {
            string File = $"{Directory.GetCurrentDirectory()}/Files/projects.json";

            string json = System.IO.File.ReadAllText(File);

            try
            {
                return json;
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
        [Route("/information")]
        [HttpGet]
        public string GetInformation()
        {
            string File = $"{Directory.GetCurrentDirectory()}/Files/information.json";

            string json = System.IO.File.ReadAllText(File);

            try
            {
                return json;
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
    }
}
