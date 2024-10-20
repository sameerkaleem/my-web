import React from "react";
import Image from "next/image";
import Gym3 from "../../../public/Gym3.jpg";

const About = () => {
  return (
    <div>
      <h1 className="mt-10">About Us</h1>
      <p className="text-center">
        
        SK Fitness Club, located in Karachi, is a premium fitness center that
        offers a wide range of services to cater to fitness enthusiasts of all
        levels. With state-of-the-art equipment, professional trainers, and a
        variety of fitness programs, it is designed to help individuals achieve
        their health goals. The club provides specialized workout routines,
        personal training sessions, and group classes such as yoga, aerobics,
        and strength training. Additionally, the welcoming environment and focus
        on personalized attention make SK Fitness Club a popular choice for
        those seeking to improve their fitness and overall well-being in
        Karachi.
      </p>

      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]">
        <Image
          src={Gym3}
          alt="Gym3"
          fill
          className="
            h-[300px] w-[500px]
            sm:h-[350px] sm:w-[500px] sm:mt-5 sm:mr-[80px]
            md:h-[400px] md:w-[650px] md:mt-10 md:mr-[80px]
            lg:h-[400px] lg:w-[600px] lg:mt-10 lg:mr-[250px]
            xl:h-[400px] xl:w-[600px] xl:mt-10 xl:mr-[270px]
             "
        />
      </div>

      <br />
      <br></br>

      <div>
        <p className="text-center">

          One of the standout features of SK Fitness Club is its modern gym
          equipment. The gym is outfitted with the latest machines and free
          weights, ensuring that members have access to high-quality tools for
          both resistance training and cardiovascular exercise. The equipment is
          maintained regularly,ensuring a safe and effective workout
          environment. In addition to the equipment,the spacious layout of the
          gym allows for comfortable movement and minimizes overcrowding,even
          during peak hours. The gym also features designated areas for
          different types of training, including sections for free weights,
          machines, cardio equipment, and functional training zones.
        </p>
      </div>

      <div>
        <p className="text-center">

          Cleanliness and hygiene are top priorities at SK Fitness Club. The gym
          is cleaned multiple times a day to ensure that all equipment and
          common areas remain sanitary. Disinfectant stations are placed
          throughout the facility, encouraging members to clean the equipment
          after each use. Additionally,the locker rooms and shower facilities
          are kept spotless, providing members with a comfortable and safe
          environment to freshen up after their workouts. The club's commitment
          to hygiene gives members peace of mind, knowing that they are working
          out in a clean and healthy environment.
        </p>
      </div>

      <br />

      <div>
        <p className="text-center">

          Overall,SK Fitness Club in Karachi stands out as a top-notch fitness
          facility that prioritizes the health, fitness, and overall well-being
          of its members. Its combination of cutting-edge equipment,professional
          trainers,diverse fitness programs, and wellness services makes it a
          one-stop destination for anyone looking to improve their physical and
          mental health. 
          The club’s focus on cleanliness,community and
          personalized fitness ensures that every member feels supported in
          their fitness journey. Whether you’re a beginner or an experienced
          athlete,
          SK Fitness Club provides the tools,guidance,and motivation
          needed to achieve your fitness goals in a positive and encouraging
          environment. 
          With its comprehensive approach to fitness and
          wellness,SK Fitness Club has become a leading choice for fitness
          enthusiasts in Karachi, helping countless individuals lead healthier,
          happier lives.
        </p>
      </div>
    </div>
  );
};

export default About;
