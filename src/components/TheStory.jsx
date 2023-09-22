import React from "react";

const TheStory = ({ image }) => {
  return (
    <div className="mt-5 flex sm:gap-20 sm:flex-row flex-col justify-center items-center">
      <div className="sm:w-[800px] sm:mb-0 mb-8">
        <h1 className="font-bold text-4xl tracking-wider">Our Story</h1>
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
        <p className="mt-3 text-gray-700 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem
          in impedit doloremque, dolor est non! Rerum sit ipsam deleniti quo
          nisi laboriosam nesciunt rem corporis. Doloremque accusamus et
          repellat nesciunt maxime repellendus ipsa laboriosam deserunt quam
          beatae reprehenderit eum suscipit, vel est, molestiae quae sapiente
          dolor sunt rerum libero! Placeat non nihil quod esse voluptatibus
          suscipit modi distinctio, adipisci illum tempore quae accusantium
          tempora enim, hic rerum. Nisi, hic voluptatem. Incidunt soluta
          quisquam similique cupiditate, mollitia ipsa dignissimos repudiandae
          voluptas inventore, praesentium consequatur eligendi nulla est maiores
          reprehenderit fuga a alias distinctio repellendus. Inventore doloribus
          aliquam at vitae modi.
        </p>
        <p className="mt-3 text-gray-700 text-lg">
          Any question? Let us know in store at 8th floor, 379 Hudson St, New
          York, NY 10018 or call us on (+1) 96 716 6879
        </p>
      </div>
      <div className="relative my-5">
        <div className="sm:w-[400px] w-[300px] sm:h-[470px] h-[390px] border-solid border-8 border-gray-500 -translate-x-5 translate-y-5"></div>
        <img
          src={image}
          className="absolute top-0 sm:w-[400px] w-[300px] sm:h-[470px] h-[390px]"
          alt="story"
        />
      </div>
    </div>
  );
};

export default TheStory;
