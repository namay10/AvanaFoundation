import React from "react";

const Features = () => {
  return (
    <section id="features" className="bg-white">
      {/* Flex Container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* About Section */}
        <div className="flex flex-col space-y-6 md:w-1/2 md:pr-8 border-r border-[#C0C0C0] ">
          <h2 className="text-4xl font-bold text-center md:text-left">About</h2>
          <p className="text-justify text-darkGrayishBlue leading-relaxed">
            We are a youth-led movement on a mission to change the way teenagers
            see and interact with AI and technology. Guided by the timeless
            wisdom of “सर्वे ज्ञानं प्राप्नुयुः, सर्वे समर्था भवन्तु,” meaning
            may knowledge reach all and may all become capable, we are not just
            teaching tools, we are building a new way of thinking. Our workshops
            equip young minds aged 11 to 17 with the skills and confidence to
            embrace AI as an ally, not a mystery. This is about unlocking
            creativity, sparking curiosity, and giving teenagers the power to
            shape the future they want to live in.
          </p>
          <p className="text-justify text-darkGrayishBlue leading-relaxed">
            What sets us apart is that this is for teenagers, by teenagers. It
            creates a connection that makes learning personal, relatable, and
            exciting. We are taking technology out of the intimidating realm of
            jargon and bringing it into real life, turning it into a force that
            inspires action. By working with schools, community centers, and
            organizations, we are creating an ecosystem where every young person
            has the chance to thrive in this fast-moving digital age. To keep
            the momentum alive, our fortnightly newsletter carries the stories,
            breakthroughs, and ideas born in these workshops, spreading the
            movement far and wide.
          </p>
          <p className="text-justify text-darkGrayishBlue leading-relaxed">
            This is not just a project, and it is certainly not a passing trend.
            It is a call to action, a mission for our generation to rise, learn,
            and take the lead in a world where technology empowers everyone. We
            are not here to close the digital divide; we are here to make sure
            it never existed. Together, we are building a future where no one
            gets left behind.
          </p>
        </div>

        {/* Numbered List */}
        <div className="flex flex-col space-y-8 md:w-1/2 md:pl-8">
          {/* What we do? */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  What we do?
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                What we do?
              </h3>
              <p className="text-darkGrayishBlue leading-relaxed">
                We introduce participants to fundamental technical skills,
                guiding them through the essential tools and concepts shaping
                the digital and AI landscape. But this is about more than just
                skills—it’s about sparking curiosity. We encourage participants
                to explore, question, and experiment with technology, helping
                them understand its role in their lives and how they can use it
                to shape their future.
              </p>
            </div>
          </div>

          {/* Why we do it? */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Why we do it?
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Why we do it?
              </h3>
              <p className="text-darkGrayishBlue leading-relaxed">
                In a world where technology drives everything from innovation to
                opportunity, access to knowledge becomes a bridge. It can close
                gaps, open doors, and transform futures. Our goal is simple but
                powerful. We want to empower young minds, giving them the
                confidence and skills they need to thrive in an AI-driven world.
                At the same time, we aim to create a shared future by breaking
                barriers to access and ensuring that every teenager has the
                chance to contribute to a brighter, more inclusive tomorrow.
              </p>
            </div>
          </div>

          {/* How we do it? */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  How we do it?
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                How we do it?
              </h3>
              <p className="text-darkGrayishBlue leading-relaxed">
                We focus on learning by doing. Our interactive workshops form
                small groups, offering hands-on experience with accessible tools
                like ChatGPT, DALL-E, and beginner coding platforms. Led by
                teenagers for teenagers, these sessions create a relatable, safe
                space for exploration. Partnering with schools and community
                centers, we aim to make technology accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
