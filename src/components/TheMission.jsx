import React from "react";

const TheMission = ({ image }) => {
  return (
    <div className="mt-20 flex sm:gap-20 sm:flex-row flex-col-reverse sm:justify-start items-center justify-center">
      <div className="relative my-5">
        <div className="sm:w-[400px] w-[300px] sm:h-[470px] h-[390px] border-solid border-8 border-gray-500 translate-x-5 translate-y-5"></div>
        <img
          src={image}
          className="absolute top-0 sm:w-[400px] w-[300px] sm:h-[470px] h-[390px]"
          alt="story"
        />
      </div>
      <div className="sm:w-[800px]">
        <h1 className="font-bold text-4xl tracking-wider">Our Mission</h1>
        <p className="mt-3 text-gray-700 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          numquam non pariatur consequatur ea dolorem mollitia quam, earum
          placeat repellendus voluptatum recusandae esse assumenda tempora,
          ducimus et? Deleniti quo perferendis quidem accusamus dolore eum animi
          ex tempora error suscipit. Voluptates rem facilis tempore eveniet ab
          deleniti modi impedit. Vero sequi consectetur ea adipisci non aperiam
          totam perspiciatis neque cum minima voluptatum, laboriosam harum
          impedit in facere mollitia nemo possimus commodi doloremque earum at!
          Ullam quia ducimus rem nisi veniam voluptatibus atque, quibusdam
          laboriosam officia provident inventore officiis voluptatem quo odit
          dolorum possimus vero fugiat maiores sequi explicabo vel blanditiis
          veritatis beatae optio! Dolorum tenetur aut dolores cupiditate!
          Aspernatur, earum minima. Repellat blanditiis dolor repudiandae.
          Pariatur porro non magnam sint voluptate, voluptatem repellat. Velit
          pariatur distinctio porro dolorum praesentium sequi adipisci,
          repudiandae iste voluptate officia aliquam odio? Deserunt rerum harum
          quaerat rem, soluta vero vitae numquam cumque dolores ea. Porro,
          recusandae.
        </p>
        <p className="flex mt-3 p-8 italic text-gray-800 text-lg flex-col border-s-4 border-gray-300">
          Creativity is just connecting things. When you ask creative people how
          they did something, they feel a little guilty because they didn't
          really do it, they just saw something. It seemed obvious to them after
          a while.
          <span className="mt-5 not-italic font-semibold">- Steve Job's</span>
        </p>
      </div>
    </div>
  );
};

export default TheMission;
