import React from "react";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClassCard from "./components/ClassCard";

const classes = [
  {
    name: "HIIT Inferno",
    time: "6:00 AM — 7:00 AM",
    trainer: "Marcus Steel",
    difficulty: "Advanced",
    description:
      "High-intensity interval training with explosive plyometrics, battle ropes, and sprint intervals. Burns up to 800 calories per session.",
    icon: "🔥",
  },
  {
    name: "Power Yoga",
    time: "7:30 AM — 8:30 AM",
    trainer: "Elena Voss",
    difficulty: "Intermediate",
    description:
      "Dynamic vinyasa flow combining strength holds, deep stretches, and breathwork for total mind-body conditioning.",
    icon: "🧘",
  },
  {
    name: "Boxing Bootcamp",
    time: "5:00 PM — 6:00 PM",
    trainer: "Kai Rodriguez",
    difficulty: "Advanced",
    description:
      "Technical boxing fundamentals paired with brutal conditioning. Heavy bag work, mitt drills, and sparring prep.",
    icon: "🥊",
  },
  {
    name: "Spin Cycle Surge",
    time: "6:30 PM — 7:15 PM",
    trainer: "Tara Blake",
    difficulty: "Intermediate",
    description:
      "High-energy cycling intervals with hill climbs, sprints, and rhythm rides. Set to a killer playlist.",
    icon: "🚴",
  },
  {
    name: "Strength Foundation",
    time: "8:00 AM — 9:00 AM",
    trainer: "Marcus Steel",
    difficulty: "Beginner",
    description:
      "Barbell-based strength training covering squat, bench, deadlift, and overhead press with progressive overload.",
    icon: "🏋️",
  },
  {
    name: "Kickboxing Cardio",
    time: "12:00 PM — 12:45 PM",
    trainer: "Kai Rodriguez",
    difficulty: "Intermediate",
    description:
      "Fast-paced kickboxing combos with pads and bags. Great cardio with real martial arts technique.",
    icon: "🦵",
  },
  {
    name: "Olympic Lifting",
    time: "5:30 AM — 6:30 AM",
    trainer: "Marcus Steel",
    difficulty: "Expert",
    description:
      "Clean & jerk, snatch technique, and accessory work. Requires prior weightlifting experience.",
    icon: "🏋️‍♂️",
  },
  {
    name: "Stretch & Recover",
    time: "7:00 PM — 8:00 PM",
    trainer: "Elena Voss",
    difficulty: "Beginner",
    description:
      "Guided mobility session with foam rolling, PNF stretching, and relaxation techniques for optimal recovery.",
    icon: "💆",
  },
  {
    name: "Tabata Thunder",
    time: "9:00 AM — 9:30 AM",
    trainer: "Tara Blake",
    difficulty: "Advanced",
    description:
      "Brutal 20/10 Tabata protocol with bodyweight and weighted exercises. 30 minutes of pure intensity.",
    icon: "⚡",
  },
  {
    name: "Pilates Core",
    time: "10:00 AM — 11:00 AM",
    trainer: "Elena Voss",
    difficulty: "Beginner",
    description:
      "Mat-based Pilates focusing on deep core activation, posture alignment, and spinal stability.",
    icon: "🎯",
  },
];

const difficultyFilters = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
];

export default function Classes() {
  return (
    <>
      <Head>
        <title>Classes — IronPulse Gym</title>
      </Head>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-fire-red/5 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <p
            className="text-fire-red font-bold uppercase tracking-[0.2em] text-sm mb-3"
            data-aos="fade-down"
          >
            Our Schedule
          </p>
          <h1
            className="heading-uppercase text-5xl md:text-7xl mb-4"
            data-aos="zoom-in"
          >
            Class <span className="text-fire-gradient">Schedule</span>
          </h1>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            From dawn grinders to evening warriors — we've got a class for every
            intensity level and schedule.
          </p>
          <div className="fire-divider w-24 mx-auto mt-8" />
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Time Overview */}
          <div className="mb-16 overflow-x-auto" data-aos="fade-up">
            <div className="grid grid-cols-7 gap-2 min-w-[700px]">
              <div className="text-xs font-bold uppercase text-gray-500 p-2">
                Time
              </div>
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div
                  key={day}
                  className="text-xs font-bold uppercase text-fire-red p-2 text-center"
                >
                  {day}
                </div>
              ))}
              {[
                "6:00 AM",
                "8:00 AM",
                "10:00 AM",
                "12:00 PM",
                "5:00 PM",
                "7:00 PM",
              ].map((time, ti) => (
                <React.Fragment key={time}>
                  <div className="text-xs text-gray-400 p-2 font-medium">
                    {time}
                  </div>
                  {[0, 1, 2, 3, 4, 5, 6].map((di) => {
                    const classForSlot = classes.find((c, ci) => {
                      const hour = parseInt(c.time);
                      const isPM = c.time.includes("PM");
                      const adjusted = isPM && hour !== 12 ? hour + 12 : hour;
                      const slotHour = parseInt(time);
                      const isSlotPM = time.includes("PM");
                      const adjustedSlot =
                        isSlotPM && slotHour !== 12 ? slotHour + 12 : slotHour;
                      return adjusted === adjustedSlot && (ti + di) % 3 === 0;
                    });
                    return (
                      <div
                        key={di}
                        className="schedule-cell min-h-[60px] flex items-center justify-center"
                      >
                        {classForSlot ? (
                          <div className="text-xs">
                            <span className="font-bold text-white block">
                              {classForSlot.name}
                            </span>
                            <span className="text-gray-500">
                              {classForSlot.trainer.split(" ")[0]}
                            </span>
                          </div>
                        ) : (
                          <span className="text-gray-600 text-xs">—</span>
                        )}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Class Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                <ClassCard {...cls} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="text-center px-4" data-aos="zoom-in">
          <h2 className="heading-uppercase text-3xl md:text-4xl mb-4">
            Can't Decide?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Book a free trial week and experience every class on our schedule.
          </p>
          <a href="/pricing" className="btn-fire">
            Start Free Trial
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
