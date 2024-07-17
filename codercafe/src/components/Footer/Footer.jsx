import React from "react";
import { delay, motion } from "framer-motion";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../assets/website/credit-cards.webp";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 class="text-3xl font-bold uppercase">Coders Cafe</h1>
            <p class=" text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime,
              numquam dolores
            </p>
            <div>
              <p class="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p class="flex items-center gap-2 mt-2">
                {" "}
                <FaMapLocation />
                Noida, Uttar Pradesh
              </p>
            </div>
          </motion.div>
          {/* Footer Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 class="text-3xl font-bold">Quick Links</h1>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <ul class="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul class="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 class="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 class="text-xl font-semibold mb-2">Payment Methods</h1>
              <img src={CreditCards} alt="credit cards" class="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* Copyright Section */}
        <p class="text-white text-center mt-8 pt-8 border-t-2">
          Copyright © 2024 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
