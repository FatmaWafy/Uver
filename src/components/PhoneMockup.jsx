import phoneMockupImage from '/mobileMockup.png';

const phoneMockupStyle = `\
@keyframes slideVertical {
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(-20px);
  }
}`;

const PhoneMockup = () => {
  return (
    <div className="relative flex justify-center items-center w-full max-w-[350px]">
      <style>{phoneMockupStyle}</style>
      <div
        className="phone-float"
        style={{ animation: 'slideVertical 2s infinite linear' }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-blue-light/10 rounded-[3rem] blur-xl transform translate-y-8 scale-110"></div>
          <img
          loading="lazy"
            src={phoneMockupImage}
            alt="UVER College Search App Interface"
            className="w-full h-auto max-w-[350px] object-cover rounded-[2.5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;