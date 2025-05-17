import React from "react";
import "./Categori.css";
import { useNavigate } from "react-router-dom";

const categories = [
    {
        name: "Sale",
        path: "/Sale",
        image: "https://media-hosting.imagekit.io//13047d9602504a1a/sales-icon-9-removebg-preview.png?Expires=1836055903&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=d0bai6pL2zZlvSbunh5qMm--dtXH3OefOf1QrNgLqe6mNnntci2sSfWC~c7YxWwWzEECwiV-0SRMesyIr7L8OZWluVGrap0MXI1U2SDNhnLuqPW~762xk2OQZVqa~LWN7TPlZvR1wdIMrlBJSuAijHZYEjBBYynCIRW6iMGdMWpB~w-bzx5I4OHDL5nHzTjv9wg7pDL~v5r11luuBLW0Og4JZYKH8CMXhikEDZdAkoJ-VMRPpwB6McP-LrJOFwzws21TqKYcFHFMarcNx24n1v1hzcIMDMZgDnjucAyrIQPFPEnd0Whnxy7OkFj21ODGPk929ro3s7qhnTCvJSa3~g__", special: "pink"
    },
    {
        name: "Computers",
        path: "/Computer",
        image: "https://royaltyfreefootages.com/upload/video/Apple%20laptop%20PNG%20image,%20transparent%20Apple%20laptop%20png%20image,%20Apple%20laptop%20png%20hd%20images%20download_1658745513.png"
    },
    {
        name: "Mobile",
        path: "/Mobile",
        image: "https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/6503856f94473-iPhone%2015%20Pro.png"
    },
    {
        name: "Tablets",
        path: "/Tablets",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJpfHr8LgtfQx6c4_x7NK_NCmQdxGA12A5w&s"
    },
    {
        name: "Drones",
        path: "/Drone",
        image: "https://pngimg.com/d/drone_PNG108.png"
    },
    {
        name: "Cameras",
        path: "/Camera",
        image: "https://media-hosting.imagekit.io//032e3a25e79448e1/pngtree-black-dslr-camera-grapher-digicam-white-png-image_13197852-removebg-preview.png?Expires=1836054457&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=b-lBxdvT8q70YuZjlTSjw2mP--z7cZiMijbIgo7AuGIJXSxibpHxT8zQhWXvyzEstYjG7YUUEGFXTrZCGQXibYzY6ZZ71QMtYa~bF8YLkNhFt7wlsV-TCNMztaKxfsuDBaud3CrDKveJQNSzCQ7MEMsJxHltou3VKHC4bdalFgUjS4xt7~EKNGCbWnWas8R86rBw9LEi-QEPzMa1BWqbtny4IzRlmtKG~hGrOIhS0tHBPXPxA6Udd6Sa4bY8QY9CEKblAYrzgWM7Rox7b326gNiu8HH82lFJKf2ichCTQutcvQLNbspacGla9Ck05MtnO7muSGE719PNo~Q5Yyro9g__"
    },
    {
        name: "Televison",
        path: "/tv",
        image: "https://www.pngall.com/wp-content/uploads/5/Full-HD-LED-TV-PNG-File-Download-Free.png"
    },
    {
        name: "Watch",
        path: "/Watch",
        image: "https://media-hosting.imagekit.io//0ac7bd34c8494487/smartwatch-realistic-isolated-transparent-background_84443-1812-removebg-preview.png?Expires=1836055020&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xPHkXykn0yU8oLvyM~8Vdbrz1X1xCrSrFhYUsz4yx9IU0GvAPySkJVuaR95m5Lsr0ObiMAFU3DJRjNqdVy9Hgx7Bn6nauoS5oFEUOnycCflunL5k4-rijE2xzhA~D6MpSQLQg2k3pwBgMTPT6tjDJ0iPIj-yTjjXmnENHc2n5OyylhqSHumDrYtkZcfy84Wa~DawXjVdfNU0hZJ1dR9PneNMW8toX-y994DJKwch1taDcgFTC4kKCrFpWMxW2l70xpfKRuI05B-1fqdpWtFHhm2H3aEPCudkZGNwYTN6cLm309jW82XTAT~kNs8keqOTL7Jplj4aATpZkZK0y5Nkgw__"
    },
    {
        name: "Speakers",
        path: "/Speaker",
        image: "https://media-hosting.imagekit.io//6fb81da3ce61479b/png-clipart-loudspeaker-enclosure-wireless-speaker-bluetooth-speaker-electronics-speaker-removebg-preview.png?Expires=1836055133&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vDM6SEx0o2cXkWBvmtCBx1DK8p2TdY-CfTDJMK-pQvmftSgNoByQYLTrTkOUrHZLQ0hMJxsd6S5XsL7oUKTXc7aZ-Rwrk16vcx0SBOriQSs0CBVD3zYuIR9YDgp3neuV7waHwXsELitM4KRhkoCECFu1L4buMeHTBrUc2XNRNT2jSE6Y1FeytY6mbY1p~7yUw7V1KhNbOhUfJY7mKCszcS38FYHhHO2w~7L9wY5RgJf88USSJP2YzFyDcJbE7TXElzHje4t21qA2RQq~Kv82T4azWGilMXEZkkqg3j6oV5OyeCshzHFWEY5GuDTirQaXRnVBJshwvQZ3GOYfbKv4ag__"
    },
    {
        name: "Headphones",
        path: "/Headphone",
        image: "https://media-hosting.imagekit.io//28ff57f16c304b8b/pngtree-fashionable-black-earphone-material-png-image_4125460-removebg-preview.png?Expires=1836055349&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=p7xeXn~S3wLCqsfo-lFwAO5GOflbKD32PuITLSss0RUPX9XJvD6yoQ9Fc6XSZg3mn1fdNLTXdg7GCJsl4xkwZpd2GW5oFwZmCB7SRsiMGeo4kQHSug2iLPmpD3i-ELetxumfrxiK~yfqwgeyhF-QuTnGa8EfvNhDDxBdRkzE8BMbnxl4eaGYb4o-9KRGR2aPUeGVuxd~ISLkzt3wKsd8WkDhISmb3qMaG0t7jic~utCgU3y0TpTkw8cpCvU8oERQsEhaKmc9ydp-DFreBipNPVcISzsO9mzFhxRzyPFOuHzwzK4GupTC-dACtaNwl2IVZ6u0kSnXsKg9IbvTWqXoig__"
    },
];

const CategoryItem = ({ name, image, special, path }) => {
    const navigate = useNavigate();
    return (
        <div className="category-item" onClick={() => navigate(path)}>
            <div className={`category-circle ${special ? special : ""}`}>
                <img src={image} alt={name} />
            </div>
            <p>{name}</p>
        </div>
    );
};

const Categories = () => {
    return (
        <div className="categories-container">
            <h2> CATEGORY</h2>
            <div className="categories-grid">
                {categories.map((category, index) => (
                    <CategoryItem key={index} {...category} />
                ))}
            </div>
        </div>
    );
};

export default Categories;
