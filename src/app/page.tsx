"use client";

import Image from "next/image";
import React from 'react';

import Gym1 from "../../public/Gym1.jpg";
import Gym2 from "../../public/Gym2.jpg";


export default function Home (){
  return <main>
    <h2 className="text-4xl font-semibold text-center">
          Memberships Available JoinNow
        </h2>
        <br></br>
        <div id="1">
          <p className="text-center">
            Health and fitness are integral to living a balanced and fulfilling
            life. They encompass both the physical and mental well-being of an
            individual, and maintaining them requires consistent effort and
            dedication. Good health is often associated with a robust immune
            system, strong muscles,and efficient bodily functions. Fitness, on
            the other hand, pertains to one’s physical abilities, such as
            strength, endurance, flexibility, and cardiovascular health. Both
            aspects are interrelated and contribute to a higher quality of life.
          </p>

          <div>
            <Image
              src={Gym1}
            className="
            h-[300px] w-[500px]
            sm:h-[350px] sm:w-[500px] sm:mt-5 sm:ml-[80px]
            md:h-[400px] md:w-[650px] md:mt-10 md:ml-[80px]
            lg:h-[500px] lg:w-[800px] lg:mt-10 lg:ml-[250px]
            xl:h-[500px] xl:w-[800px] xl:mt-10 xl:ml-[270px]
             "
              alt="Gym1"
              
            />
          </div>
          
          

          <br></br>

          <p className="text-center">
            Physical fitness is achieved through regular exercise and movement,
            which helps maintain healthy body weight, strengthens muscles, and
            improves cardiovascular function. Engaging in different types of
            exercises, such as strength training, cardiovascular activities, and
            flexibility exercises, provides a well-rounded approach to fitness.
            Strength training builds muscle mass, improves metabolism, and
            enhances bone density, while cardiovascular exercises improve heart
            health and endurance. Flexibility training, such as yoga or
            stretching, helps improve the range of motion in joints and reduces
            the risk of injury. A balanced routine that includes all these forms
            of exercise ensures overall physical fitness.
          </p>

          <br/>

          <p className="text-center">
            Good health, however, is not just about physical fitness; it also
            includes mental and emotional well-being. Mental health can be
            nurtured through mindfulness practices, stress management, and
            fostering positive social connections. Physical activity has been
            proven to have positive effects on mental health by reducing
            anxiety, depression, and stress. Regular exercise stimulates the
            production of endorphins, chemicals in the brain that act as natural
            painkillers and mood elevators. Activities like yoga and meditation
            are also particularly beneficial for mental health, as they promote
            relaxation and mindfulness, helping to reduce stress and improve
            emotional resilience.
            
          </p>
          <div>
            <Image
              src={Gym2}
              className="
              w-[400px] h-[500px] ml-[50px]
            sm:h-[550px] sm:w-[400px] sm:mt-5 sm:ml-[130px]
            md:h-[550px] md:mt-10  md:w-[450px]  md:ml-[180px]
            lg:h-[550px] lg:mt-10  lg:w-[500px]  lg:ml-[400px]
            xl:h-[550px] xl:mt-10  xl:w-[500px]  xl:ml-[420px]"
              alt="Gym2"
              
            />
          </div>

          <br/>

          <p className="text-center">
            In addition to physical activity, proper nutrition is critical for
            maintaining good health. A balanced diet provides the body with the
            necessary nutrients to function optimally. Macronutrients like
            proteins, carbohydrates, and fats are essential for energy, muscle
            repair, and overall bodily function. Additionally, micronutrients
            such as vitamins and minerals support various processes within the
            body,including immune function, bone health, and energy production.
            Hydration is also vital, as water plays a key role in maintaining
            cellular function, regulating body temperature, and removing waste
            from the body. Eating a variety of whole, unprocessed foods ensures
            that the body receives the nutrients it needs to thrive.
          </p>
        </div>
  </main>
};
