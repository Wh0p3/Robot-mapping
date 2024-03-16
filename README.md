
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Wh0p3/Robot-mapping/tree/main">
    <img src="prototype photo.jpeg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">SLAM with RGB-D Kinect Sensor</h3>
</div>
  <p align="left">
    Our SLAM bot is an autonomous mapping robot equipped with a Kinect sensor, capable of generating detailed 3D maps of its surroundings. Using RGB-D data, it employs the Real-Time Appearance-Based Mapping (RTAB) algorithm for efficient mapping and loop closure detection. It navigates indoor and outdoor environments, autonomously capturing and storing point clouds to facilitate digital visualization. Our project aims to enhance autonomy through sensor fusion and algorithm optimization, paving the way for robust mapping in diverse environments.


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#Key-Features">Key Features</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="left">
The SLAM bot is an autonomous mapping robot designed to create 3D maps of its surroundings using a Kinect sensor. Equipped with both a depth sensor and an RGB camera, mounted atop the robot, the SLAM bot is capable of capturing detailed information about its environment. Operating primarily indoors but with the ability to map anything within its range, the bot aims to autonomously map entire locations, facilitating digital visualization.
<p align="left">
Controlled wirelessly via a FLYSKY controller paired with a receiver connected to the robot, the SLAM bot can be directed to move and explore its environment. The wireless controller provides human supervision, but with the integration of appropriate algorithms and sensors, full autonomy is feasible.

<p align="left">
The SLAM algorithm used is RTAB (Real-Time Appearance-Based Mapping), which uses RGB-D data for mapping. It employs an incremental appearance-based loop closure detector, using a bag-of-words method to assess the likelihood of new images coming from known locations. When a loop closure is confirmed, it adds constraints to the map's graph, which are then optimized to reduce errors. To maintain real-time performance in extensive environments, a memory management system restricts the number of locations used for loop closure detection and graph optimization.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Built With

### Software
<p align="left">
* ROS (Robot Operating System)
* RViz for visualization
* RTAB-Map for SLAM functionality
* FreeNect

<p align="left">
### Hardware
<p align="left">
* Sabertooth Motor Driver
* FLYSKY Receiver and Transmitter
* Xbox 360 Kinect Sensor


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Key Features
<p align="left">
- [ ] Autonomous mapping of 3D environments using Kinect sensor.
- [ ] Wireless control for human supervision, with potential for full autonomy.
- [ ] RTAB SLAM algorithm for real-time mapping and loop closure detection.
- [ ] ROS and RViz integration for software development and visualization.


## Future Development
<p align="left">
- [ ] Implementation of algorithms to reduce sensor interference and optimize mapping accuracy.
- [ ] Enhancement of autonomy through sensor fusion and decision-making algorithms.
- [ ] Integration of additional sensors for robust mapping in varied environments. 

<!-- USAGE EXAMPLES -->
## Use-Cases 
<p align="left">
- [ ] Cave Exploration
- [ ] Defense Purposes
- [ ] Robot Automation


See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Conclusion
<p align="left">
The SLAM bot project combines hardware and software to create a versatile mapping platform capable of autonomously generating 3D maps of indoor and outdoor environments within range. With a focus on real-time performance and usability, it represents a significant step towards digital representation and exploration of physical spaces.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
