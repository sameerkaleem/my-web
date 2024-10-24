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
      <br></br>
    

      <div className="flex justify-center">
  <Image
    src={Gym3}
    alt="Gym3"
    
    className="
      w-[85%] h-auto  // Default size for mobile devices
      sm:w-[75%] sm:h-auto // For small devices (sm: min-width 640px)
      md:w-[70%] md:h-auto // For medium devices (md: min-width 768px)
      lg:w-[60%] lg:h-auto // For large devices (lg: min-width 1024px)
      xl:w-[50%] xl:h-auto // For extra-large devices (xl: min-width 1280px)
    "
  />
</div>



      <br />
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
