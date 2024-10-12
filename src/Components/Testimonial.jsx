
import testimonialImage from '/public/testimonial.jpg'; // Adjust the path according to your project structure

const testimonials = [
  {
    quote: "STP’s sustainable approach has changed the way we think about materials. We no longer have to choose between beauty and environmental responsibility.",
    author: "John Doe, Eco Furniture Co."
  },
  {
    quote: "Thanks to STP’s steam-treated woods, we’ve been able to reduce costs while ensuring that our products remain high quality and environmentally friendly.",
    author: "Jane Smith, Green Builders LLC"
  },
  {
    quote: "We appreciate STP’s commitment to preserving forests. Their innovative process is making a significant impact on our industry.",
    author: "Michael Green, Sustainable Interiors"
  },
];

const Testimonial = () => {
  return (
    <div className="relative w-full py-16 bg-dark-green">
      {/* Background Image */}
      <div 
        className="absolute inset-0 object-cover w-full h-full opacity-90 bg-cover"
        style={{ backgroundImage: `url(${testimonialImage})` }}
      ></div>
      <div className="relative z-20 text-center text-white">
        {/* Section Header */}
        <h2 className="text-4xl font-bold mb-4 font-merriweather">
          What Our Partners Say
        </h2>
        <p className="text-lg italic mb-12 max-w-lg mx-auto font-light">
          See how our innovative process is transforming industries and preserving nature.
        </p>

        {/* Testimonials Grid */}
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-dark-green p-6 rounded-lg shadow-lg relative z-30">
              <p className="italic text-lg mb-4 font-merriweather">
                `{testimonial.quote}`
              </p>
              <p className="text-right text-sm font-bold">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
