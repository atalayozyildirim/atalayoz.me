import React from "react";
import Image from "next/image";

export default function Card(props: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div>
      <ul className="cards drop-shadow-lg flex justify-center">
        <li>
          <a href={props.link} className="card ">
            <Image
              src="/nft.jpg"
              className="card__image"
              alt="profile-image"
              width={500}
              height={500}
              loading="lazy"
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <Image
                  className="card__thumb"
                  src="/a.png"
                  width={50}
                  height={50}
                  alt="profile"
                  loading="lazy"
                />
                <div className="card__header-text ">
                  <h3 className="card__title font-semibold">{props.title}</h3>
                  <span className="card__status font-semibold">1 hour ago</span>
                </div>
              </div>
              <p className="card__description text-black">
                {props.description.length < 230
                  ? props.description
                  : props.description.slice(0, 230) + "..."}
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
