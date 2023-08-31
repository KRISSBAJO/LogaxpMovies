import React from 'react';

export default function BookingFooter() {
  return (
    <div className="  text-black p-4 bg-dark-grey-700 dark:bg-Ourcolor dark:text-white mt-14">
      <h2 className="text-xl font-semibold mb-2">Booking</h2>
      <p className="text-sm mb-4">
        Welcome to our appointment booking app! We're here to make your life easier by offering a seamless and efficient way to schedule appointments of all types. Whether you need to book a doctor's appointment, a salon visit, or a meeting with a professional, our app has got you covered.
      </p>
      <p className="text-sm mb-4">
        What sets us apart from the rest is our user-friendly interface, fast and secure booking process, and a wide range of options to choose from. Our app is designed with your convenience in mind, allowing you to browse available appointments, select your preferred time slot, and receive instant confirmation.
      </p>
      <p className="text-sm mb-4">
        Say goodbye to long waiting times and the hassle of making phone calls. With our app, you can manage your appointments anytime, anywhere, and stay organized with automated reminders. Experience the difference and start booking your appointments with ease!
      </p>
      <p className="text-sm">
        Thank you for choosing us for your appointment booking needs.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-8 text-black mb-40">
    <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold mb-2">Our Commitment</h3>
      <p className="text-sm">
        We are committed to providing efficient and hassle-free appointment booking experiences for our users.
      </p>
    </div>
    <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold mb-2">Efficiency</h3>
      <p className="text-sm">
        We value your time and strive to ensure that our booking process is quick and streamlined.
      </p>
    </div>
    <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold mb-2">Dedication</h3>
      <p className="text-sm">
        Our team is dedicated to delivering exceptional service and maintaining high standards of professionalism.
      </p>
    </div>
  </div>
</div>
    );
}
