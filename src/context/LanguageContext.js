import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  EN: {
    home: "Home",
    aboutUs: "About Us",
    ourMinistries: "Our Ministries",
    upcomingCourses: "Upcoming Courses",
    getInvolved: "Get Involved",
    prayerPoints: "Prayer Points",
    donate: "Donate",
    events: "Events",
    blogNews: "Blog/News",
    contactUs: "Contact Us",
    missionVision: "Our Mission and Vision",
    missionVisionBrief: "Brief overview of YWAM Kandy’s mission and vision.",
    welcome: "Welcome to YWAM Kandy",
    invitation: "Invitation to explore the website further.",
    ywamValues: "YWAM Foundational Values",
    ywamValuesList: [
      "KNOW GOD: YWAM is committed to know God, His nature, His character and His ways as revealed in the Bible, the inspired and authoritative Word of God. We seek to reflect who He is in every aspect of our lives and ministry. The automatic overflow of knowing and enjoying fellowship with God is a desire to share Him with others.",
      "MAKE GOD KNOWN: YWAM is called to make God known throughout the whole world, and into every arena of society through evangelism, training and mercy ministries. We believe that salvation of souls should result in transformation of societies, thus obeying Jesus’ command to make disciples of all nations.",
      "HEAR GOD'S VOICE: YWAM is committed to creating with God through listening to Him, praying His prayers and obeying His commands in matters great and small. We are dependent upon hearing His voice as individuals, together in team contexts and in larger corporate gatherings as an integral part of our process for decision making.",
      "PRACTICE WORSHIP AND INTERCESSORY PRAYER: YWAM is dedicated to worship Jesus and engage in intercessory prayer as integral aspects of daily life. We also recognize the intent of Satan to destroy the work of God and we call upon God’s power and the Holy Spirit to overcome his strategies in the lives of individuals and in the affairs of nations.",
      "BE VISIONARY: YWAM is called to be visionary, continually receiving, nurturing and releasing fresh vision from God. We support the pioneering of new ministries and methods, always willing to be radical in order to be relevant to every generation, people group, and sphere of society. We believe that the apostolic call of YWAM requires the integration of spiritual eldership, freedom in the Spirit and relationship, centered on the Word of God.",
      "CHAMPION YOUNG PEOPLE: YWAM is called to champion youth. We believe God has gifted and called young people to spearhead vision and ministry. We are committed to value them, trust them, train them, support them, make space for them and release them. They are not only the Church of the future; they are the Church of today. We commit to follow where they lead, in the will of God.",
      "BE BROAD-STRUCTURED AND DECENTRALIZED: YWAM is broad-structured and diverse, yet integrated. We are a global family of ministries held together by shared foundational covenants, purpose, vision, values and relationships. We believe that structures should serve the people and the purposes of God. Every ministry at every level has the privilege and responsibility of accountability to a circle of recognized spiritual elders.",
      "BE INTERNATIONAL AND INTERDENOMINATIONAL: YWAM is international and interdenominational in its global scope as well as its local constituency. We believe that ethnic, linguistic and denominational diversity, along with redeemed aspects of culture, are positive factors that contribute to the health and growth of the mission.",
      "HAVE A BIBLICAL CHRISTIAN WORLDVIEW: YWAM is called to a biblical Christian worldview. We believe that the Bible—the textbook for all of life—makes a clear division between good and evil; right and wrong. The practical dimensions of life are no less spiritual than the ministry expressions. Everything done in obedience to God is spiritual. We seek to honor God with all that we do, equipping and mobilizing men and women of God to take roles of service and influence in every arena of society.",
      "FUNCTION IN TEAMS: YWAM is called to function in teams in all aspects of ministry and leadership. We believe that a combination of complementary gifts, callings, perspectives, ministries and generations working together in unity at all levels of our mission provides wisdom and safety. Seeking God’s will and making decisions in a team context allows accountability and contributes to greater relationship, motivation, responsibility and ownership of the vision.",
      "EXHIBIT SERVANT LEADERSHIP: YWAM is called to servant leadership as a lifestyle, rather than a leadership hierarchy. A servant leader is one who honors the gifts and callings of those under his/her care and guards their rights and privileges. Just as Jesus served His disciples, we stress the importance of those with leadership responsibilities serving those whom they lead.",
      "DO FIRST, THEN TEACH: YWAM is committed to doing first, then teaching. We believe that firsthand experience gives authority to our words. Godly character and a call from God are more important than an individual’s gifts, abilities and expertise.",
      "BE RELATIONSHIP-ORIENTED: YWAM is dedicated to being relationship-oriented in our living and working together. We desire to be united through lives of holiness, mutual support, transparency, humility, and open communication, rather than a dependence on structures or rules.",
      "VALUE THE INDIVIDUAL: YWAM is called to value each individual. We believe in equal opportunity and justice for all. Created in the image of God, people of all nationalities, ages and functions have distinctive contributions and callings. We are committed to honoring God-given leadership and ministry gifts in both men and women.",
      "VALUE FAMILIES: YWAM affirms the importance of families serving God together in missions, not just the father and/or mother. We also embrace the inclusion of single-parent families. We encourage the development of strong and healthy family units, with each member sharing the call to missions and contributing their gifts in unique and complementary ways. We uphold and celebrate the biblical view that God’s intent for holy matrimony is between one man and one woman.",
      "PRACTICE DEPENDENCE ON GOD: YWAM is called to practice a life of dependence upon God for financial provision. For individuals and YWAM corporately this comes primarily through His people. As God has been generous toward us, so we desire to be generous. YWAMers give themselves, their time and talents to God through the mission with no expectation of remuneration.",
      " PRACTICE HOSPITALITY: YWAM affirms the ministry of hospitality as an expression of God’s character and the value of people. We believe it is important to open our hearts, homes, campuses and ministry centers to serve and honor one another, our guests and the poor and needy, not as acts of social protocol, but as expressions of generosity.",
      "COMMUNICATE WITH INTEGRITY: YWAM affirms that everything exists because God communicates. Therefore, YWAM is committed to truthful, accurate, timely and relevant communication. We believe good communication is essential for strong relationships, healthy families and communities, and effective ministry."
    ],
    aboutUsBrief: "Learn about our leadership and staff.",
    leadershipAndStaff: "Leadership and Staff",
    baseLeader: "Base Leader",
    baseLeaderNames: "Dishantha Kandangama and Manori Jacob",
    staff: "Staff",
    staffMembers: [
      "Shashikumar Steevan",
      "Nadeesha Chathurangani",
      "Esther Naomi",
      "Shehan Kumara",
      "Pushpa Kumara",
      "Tharushi Dileshika",
      "Dissanayaka Family (Family Staff)"
    ],
    volunteerStaff: "Volunteer Staff",
    volunteerStaffMembers: [
      "Kavishka Dananjaya"
    ],
    aboutUsDetails: "Details about our organization and our mission.",

    ministriesPage: {
      title: "Our Ministries",
      dtsCourseOverview: {
        title: "DTS Course Overview",
        description: "The Forerunner Discipleship Training School (DTS) is a six-month program blending classroom learning, small group activities, personal reflection, practical service, and community living. This DTS gives you an opportunity to discover your passions and your part in God’s purposes for the world. It is for those who long to follow Jesus in new ways with a different perspective. There are two portions of the school: Lecture Phase and Outreach Phase.",
        items: [
          {
            title: "KNOW GOD",
            description: "In the lecture phase, your focus will be on knowing God, His Word, and His world. You will seek transformation, a renewed mind, and personal growth. You’ll learn not only from teachers but also from community living and practical training."
          },
          {
            title: "MAKE GOD KNOWN",
            description: "During the outreach phase, your class will be mobilized to serve God out in the world. You will have a chance to discover your abilities as you care for people and share the good news of Jesus."
          }
        ]
      },
      schedule: {
        title: "Schedule",
        paragraphs: [
          "Throughout the DTS program, students engage in a variety of activities designed to foster spiritual growth, personal development, and practical skills. Daily schedules include dedicated time for prayer and meditation, providing students with opportunities to deepen their relationship with God and cultivate a lifestyle of spiritual discipline.",
          "In addition to classroom lectures and discussions, students also participate in inner healing sessions, where they are guided through a process of healing and restoration from past experiences. These sessions aim to address emotional wounds and traumas, equipping students with tools for inner healing and wholeness.",
          "Beyond academic and spiritual activities, students are also involved in practical service and community living, including outside work duties. These duties not only contribute to the functioning of the DTS community but also provide opportunities for students to develop a servant-hearted attitude and practical life skills."
        ]
      },
      enrollmentInformation: {
        title: "Enrollment Information",
        description: "YWAM Discipleship Training School (DTS) Application Form",
        sections: {
          personalInformation: {
            title: "Personal Information",
            fields: [
              "Full Name:",
              "Date of Birth:",
              "Gender:",
              "Nationality:",
              "Email Address:",
              "Phone Number:",
              "Mailing Address:"
            ]
          },
          spiritualBackground: {
            title: "Spiritual Background",
            fields: [
              "How long have you been a Christian?",
              "Briefly share your testimony:",
              "Why are you interested in participating in the DTS?"
            ]
          },
          reference: {
            title: "Reference",
            fields: [
              "Name:",
              "Email Address:",
              "Phone Number:"
            ]
          },
          medicalInformation: {
            title: "Medical Information",
            fields: [
              "Do you have any medical conditions or allergies we should be aware of?",
              "Are you currently taking any medication? If yes, please specify.",
              "Do you have medical insurance? If yes, please provide details."
            ]
          },
          languageProficiency: {
            title: "Language Proficiency",
            fields: [
              "Are you proficient in English? (Yes/No)",
              "If yes, please rate your English proficiency: Beginner/Intermediate/Advanced"
            ]
          },
          financialInformation: {
            title: "Financial Information",
            fields: [
              "How do you plan to finance your participation in the DTS?",
              "Are you in need of financial assistance? (Yes/No)",
              "If yes, please explain your financial situation and any specific needs."
            ]
          },
          availability: {
            title: "Availability",
            fields: [
              "When are you available to start the DTS?",
              "Are there any specific dates you are unavailable for the program?"
            ]
          },
          additionalComments: {
            title: "Additional Comments or Questions",
            fields: [
              "Comments or Questions:",
              "Textarea"
            ]
          }
        },
        submitButton: "Submit"
      },
      churchPlantingInitiatives: {
        title: "Church Planting Initiatives",
        description: "Learn about our church planting initiatives and their impact.",
        initiatives: [
          {
            name: "Lanka Faith Mission Church, Agunawala, Peradeniya",
            activities: [
              "Worship",
              "Teaching the Bible",
              "Sunday School",
              "Evangelism",
              "Youth Ministry",
              "Bible Study"
            ],
            successStories: [
              "Impact on the Community: With over 25 families actively involved, Lanka Faith Mission Church has become a beacon of hope and love in the Agunawala area. Through various ministries such as worship, teaching the Bible, Sunday School, evangelism, and youth ministry, the church has been instrumental in transforming lives and strengthening families.",
              "Collaborative Ministry: In addition to its local outreach efforts, Lanka Faith Mission Church collaborates with other local churches to serve the broader community. This partnership demonstrates the unity and collective impact of the body of Christ in spreading the gospel and meeting the needs of people.",
              "Affiliation: Lanka Faith Mission Church is affiliated with the Lanka Christian Shepherds denomination, reflecting its commitment to being part of a wider network of believers dedicated to serving God and His kingdom."
            ]
          },
          {
            name: "Plant Church in Udaperadeniya (Remote Village)",
            activities: [
              "Worship",
              "Teaching the Bible",
              "Sunday School",
              "Evangelism",
              "Youth Ministry",
              "Bible Study"
            ]
          }
        ],
        successStoriesTitle: "Success Stories:"
      },
      participationInterest: "Are you interested in participating in our church planting initiatives after completing the DTS program? Let us know how you’d like to get involved."
    },
    coursesPage: {
      upcomingCourses: "Upcoming Courses",
      coursesList: [
        { title: "DTS Training" },
        { title: "Mini DTS" },
        { title: "The Member Care Foundations Course (MCFC)" },
        { title: "LTS" }
      ],
      mcfc: {
        title: "The Member Care Foundations Course (MCFC)",
        description: "The Member Care Foundations Course (MCFC) is centered around the comprehensive understanding of member care, defined as 'The formal and informal efforts to develop, preserve, and restore kingdom workers for effective service.' It is structured upon seven key areas of support aimed at nurturing and sustaining missionaries:",
        items: [
          "Savior Care: Focusing on spiritual well-being and nurturing a deeper relationship with the divine.",
          "Self-Care: Emphasizing personal health, emotional resilience, and the importance of boundaries and self-awareness.",
          "Staff Care (Mutual Care): Encouraging a culture of support and mutual care among fellow missionaries and team members.",
          "Shepherd Care: Providing pastoral support, mentorship, and guidance for missionaries in their spiritual journey and ministry roles.",
          "Structure Care: Addressing organizational and logistical support systems to ensure missionaries are effectively equipped for their roles.",
          "Sender/Supporter Care: Highlighting the significance of maintaining healthy relationships with supporters and sending organizations.",
          "Specialist Care: Offering specialized support and resources tailored to address unique challenges or needs within the mission field."
        ],
        details: "Throughout the intensive three-week course, participants will engage with a diverse range of topics and practical tools within each area of support. Various teaching methods, including case studies, demonstrations, practice sessions, and applications, will be utilized to facilitate comprehensive learning and skill development.",
        resources: "To supplement their learning experience, students will receive a comprehensive training manual, along with access to a digital library of resources. These resources are designed to support participants in contexts where immediate assistance may not be readily available. Additionally, all presenter's notes and PowerPoint presentations will be provided, empowering students to review and utilize the material for effective communication and implementation of member care principles in their respective fields of service."
      },
      enrollmentInformation: {
        title: "Enrollment Information",
        description: "Thank you for your interest in joining one of our upcoming courses. Please complete the following form to apply for the program.",
        personalInformation: {
          title: "Personal Information",
          fields: [
            "Full Name:",
            "Date of Birth:",
            "Gender:",
            "Nationality:",
            "Email Address:",
            "Phone Number:",
            "Mailing Address:"
          ]
        },
        spiritualBackground: {
          title: "Spiritual Background",
          fields: [
            "How long have you been a Christian?",
            "Briefly share your testimony:",
            "Why are you interested in participating in the course?"
          ]
        },
        reference: {
          title: "Reference",
          fields: [
            "Name:",
            "Email Address:",
            "Phone Number:"
          ]
        },
        medicalInformation: {
          title: "Medical Information",
          fields: [
            "Do you have any medical conditions or allergies we should be aware of?",
            "Are you currently taking any medication? If yes, please specify.",
            "Do you have medical insurance? If yes, please provide details."
          ]
        },
        languageProficiency: {
          title: "Language Proficiency",
          fields: [
            "Are you proficient in English? (Yes/No)",
            "If yes, please rate your English proficiency: Beginner/Intermediate/Advanced"
          ]
        },
        financialInformation: {
          title: "Financial Information",
          fields: [
            "How do you plan to finance your participation in the course?",
            "Are you in need of financial assistance? (Yes/No)",
            "If yes, please explain your financial situation and any specific needs."
          ]
        },
        availability: {
          title: "Availability",
          fields: [
            "When are you available to start the course?",
            "Are there any specific dates you are unavailable for the program?"
          ]
        },
        additionalComments: {
          title: "Additional Comments or Questions",
          fields: [
            "Comments or Questions:",
            "Textarea"
          ]
        },
        submitButton: "Submit"
      }
    },
    contactUsPage: {
      title: "Contact Us",
      description: "We'd love to hear from you. Please reach out with any questions or comments!",
      formTitle: "Get in Touch",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        address: "Address",
        message: "Message",
        submitButton: "Submit"
      },
      contactInfo: {
        title: "Our Contact Information",
        addressLabel: "Address",
        address: "123 Main Street, Hometown, ABC 12345",
        phoneLabel: "Phone",
        phone: "+1 (123) 456-7890",
        emailLabel: "Email",
        email: "contact@example.com"
      },
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.6728283379816!2d79.96871595103237!3d6.927079990545737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b5c26c3b7a5%3A0xf7d0134caa4fd2d2!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1631316356789!5m2!1sen!2sus",
      socialMedia: {
        title: "Follow Us",
        links: [
          {
            name: "Facebook",
            url: "https://facebook.com/yourpage",
            icon: "/assets/facebook-icon.png"
          },
          {
            name: "Twitter",
            url: "https://twitter.com/yourpage",
            icon: "/assets/twitter-icon.png"
          },
          {
            name: "Instagram",
            url: "https://instagram.com/yourpage",
            icon: "/assets/instagram-icon.png"
          }
        ]
      },
      faqTitle: "Frequently Asked Questions",
      faqItems: [
        {
          question: "How can I contact customer support?",
          answer: "You can reach out to our customer support via email at support@example.com or by calling +1 (123) 456-7890."
        },
        {
          question: "Where are you located?",
          answer: "We are located at 123 Main Street, Hometown, ABC 12345."
        },
        {
          question: "What are your business hours?",
          answer: "Our business hours are Monday to Friday, 9 AM to 5 PM. We are closed on weekends."
        }
      ]
    },
    eventsPage: {
      title: "Events",
      description: "Upcoming events and activities.",
      eventList: [
        {
          title: "Community Outreach",
          date: "October 5, 2024",
          description: "Join us for a day of community outreach and service.",
          image:"/assets/community.jpg"
        },
        {
          title: "Annual Fundraiser",
          date: "November 15, 2024",
          description: "Help support our mission at our annual fundraising event.",
          image:"/assets/fundrasier.png"
        },
        {
          title: "Youth Retreat",
          date: "December 20, 2024",
          description: "A weekend retreat for youth to grow in faith and fellowship.",
          image:"/assets/yout-.png"
        },
      ],
    },
    blogNewsPage: {
      title: "Blog/News",
      description: "Latest updates, news, and articles.",
      posts: [
        {
          title: "YWAM Kandy's New Outreach Program",
          date: "September 1, 2024",
          image:"/assets/community.jpg",
          excerpt: "We are excited to launch a new outreach program aimed at serving the local community and beyond.",
        },
        {
          title: "Successful DTS Graduation",
          date: "August 20, 2024",
          image:"/assets/yout-.png",
          excerpt: "Our Discipleship Training School (DTS) has successfully graduated another cohort of passionate individuals ready to make a difference.",
        },
        {
          title: "Upcoming Youth Retreat",
          image:"/assets/yout-.png",
          date: "July 15, 2024",
          excerpt: "Get ready for an inspiring weekend as we host our annual youth retreat focused on spiritual growth and fellowship.",
        },
      ],
    },
    prayerPointsPage: {
      title: "Prayer Points",
      description: "Here are some important prayer points for our community.",
      points: [
        "Pray for the upcoming outreach program to have a positive impact on the community.",
        "Pray for wisdom and strength for our leaders as they make important decisions.",
        "Pray for unity and growth within our community.",
        "Pray for the health and well-being of our members.",
        "Pray for financial provision to support our various programs and initiatives."
      ],
    },
    donatePage: {
      title: "Donate",
      description: "Support our mission by making a donation.",
      form: {
        name: "Name",
        email: "Email",
        amount: "Donation Amount",
        message: "Message (optional)",
        submitButton: "Donate Now"
      },
      thankYouMessage: "Thank you for your generous support!"
    },
    getInvolvedPage: {
      title: "Get Involved",
      description: "Discover ways you can get involved with our mission and make a difference.",
      sections: {
        volunteering: {
          title: "Volunteering",
          description: "Join us as a volunteer to help with various activities and outreach programs.",
        },
        donations: {
          title: "Donations",
          description: "Support our mission financially to help us reach more people and expand our programs.",
        },
        partnerships: {
          title: "Partnerships",
          description: "Partner with us to create lasting impact through collaborative efforts and shared resources.",
        },
        events: {
          title: "Events",
          description: "Participate in or organize events to raise awareness and support our initiatives.",
        },
      },
    },
  },
  SI: {
    home: "මුල් පිටුව",
    aboutUs: "අප ගැන",
    ourMinistries: "අපගේ සේවාවන්",
    upcomingCourses: "ඉදිරි පාඨමාලා",
    getInvolved: "ඉදිරියට සම්බන්ධ වන්න",
    prayerPoints: "පැතුම් ස්ථාන",
    donate: "දායක වන්න",
    events: "සිදුවීම්",
    blogNews: "බ්ලොග්/ප්‍රවෘත්ති",
    contactUs: "අප අමතන්න",
    missionVision: "අපේ මෙහෙවර සහ දේශන",
    missionVisionBrief: "YWAM කෑන්ඩියේ මෙහෙවර සහ දේශන පිළිබඳ සාරාංශය.",
    welcome: "YWAM කෑන්ඩියට සාදරයෙන් පිළිගනිමු",
    invitation: "වෙබ් අඩවිය තවත් සෙවීමට ආරාධනා.",
    ywamValues: "YWAM මූලික අගයන්",
    ywamValuesList: [
      "දේශන: YWAM බලමු ප්‍රකාශනය කරන්න සඳහා ප්‍රකාශනය කරගන්න, ඔව් ඔව්නේ, ඔව් තරු සහ ඔව් මාරුක්ෂක තුනක් ප්‍රදානය කරගන්න. අපි අපේ ජීවිතයේ එපා ඔවුන් සහ අපේ සේවාවෙහි තියෙන්නේ කුමක්දැකී ඇති සියලුම ආශ්‍රේයින් සමඟ පැහැදිලි හා අතීත ප්‍රතිසංස්කරණ අභියෝග සහිත බෝධිපානයක් වෙයි.",

      "දේශන කිරීම තහනම: YWAM සඳහා සියළු ලෝකයේ දේශනය කිරීමට අපට විමසීම, පුරාවිද්‍යාව සහ ප්‍රහාර සේවාවෙහි භාවිතා වන්නේ. අපගේ දුවන් දේශනයේ ප්‍රතිචාරයේ සාලය විශ්ලේෂණයට පත් කිරීමේ අරමුණ වෙනස්ව පිළිගැනීමට අපට දැනුම් ලබාගත යුතු වෙයි.",

      "බලධාරීන්ගේ හදන්න: YWAM ඔබට මාරු කරන්න සඳහා දෙවැනිකව ඇතිකර ඔවුන්හි ප්‍රතිවර්ධනය කිරීම, ඔවුන්ගේ නම් ප්‍රතිස්සරණයේ නියම කිරීමේ නියමාවක් ලබන තියෙනවා. අපගේ කටුවක් බොහෝදේ විය හැකිය, තරුවක් සහිත සංගීත මෙන්යාම, වටහාන්මය ලේකමක් ප්‍රායෝගිකාමීය සිටී.",

      "විස්තරය හා අතීතාවීම් හා හහන්යාම් වැනි පෙළ විස්තරය යනු: YWAM බොහෝ ක්ෂේපීවන් හා අතීතාවීම් සහිත සියලුම දිනයින්ට වැටුප් එළියෙන් විස්තරය ඇතිවීමට හා හහන්යාම් වීමේ සංවාදයට විරෝධයක් සහිත සාවදයේ ප්‍රභේදය සඳහා වර්ධනය පැවරීම හා නිසාත් පාරදීමේ කාර්යයට වනායේ දේශනය විසින් සිටී.",

      "සිප්තැනිය: YWAM අපි සියළුම වරක්, සහයෝග ලෙස නියෝගය හා විශේෂය පිළිබඳ මූලික සාරාංශයක් විසින් අපට වටහාන්මය ලබාදෙනු ඇත. අපි නියමම නව සේවායන් සහ ක්ෂේපී ක්රමවල් සටහන් සඳහා උදව් ප්‍රමාණවත්, අවම වීම්ගත් වූවේ වරදක් අවසන් කිරීමට සහාය වීම සඳහා ත්‍රිවන භූමිය, ආගමික ගැටළු සහ වත්මන් සන්හිත විදුහල්පතින් සමඟ එක්වූ වරම සැලකීම සඳහා හටගන්වනු ලබයි.",

      "චම්පොරේස් ජයකරා: YWAM නිදහස් වෙනස් බැවුනු තිබුනු දුෂ්කරාවෙහිද, සියළු සම්බන්ධව ප්‍රහාර සහ සේවාවෙහි සාධාරණ අධිකාරීන්ගේ හා බලයන් පෙරහැරීමට අපි ආදර්ශනවනු ඇත. ඔව්න් වටා තුරු මෙයාගේ සියලු නිවාස සහ ස්ථානාපතින් හට ඉස්සෙල්වීමේදී හා එහි පිළිතුරු බෙදා ගැනීමට වයස වූවේ, සියලු ගමන්කරුවන්, ජයකරාන් සහ ප්‍රසිද්ධිකරුවන්ට එක්වූ අනතුරු අපිට සුව සමානකාමීයව දැඩිය යුතුය.",

      "ප්‍රමුඛ-විශේෂ-හා සාර්වික විද්‍යායකයන්: YWAM විසින් සුවඳේදී, වෙනත් ජනක, පාලනේ, සහ සංගීත ගෞරවයේ වෙනස්ව ඔවුන් අපේ ප්‍රමුඛන්යායත්වයට හා විරෝධයට අපට එය නියමයෙන් සිටී. ආචාරකාරීන්ගේ කාර්යයන් අපිට අරුත්කරණ සහ නිර්දේශිත ස්ථානවල සේවාදායකයන්ට විරෝධයෙන් සේවය භූමියේදී හිමිකර පෙරහැරීමේ හා හැඳුනුම්පත් පරිදි සහය සඳහා හා හැදුනුම්පත් පරිදිම සඳහා අපි විරෝධයට පැමිණෙනු ඇත.",

      "ජාතියක් හා බහුවාන්ය වර්ගයේ: YWAM සියලුම විරෝධී සහ ස්වාභීතාවේ සාමාන්‍යව ජාතියක් හා බහුවාන්ය වර්ගයේදී ජාතියන්, භාෂා සහ පිහිටුම් විශේෂය, සහයෝගිත්වය සහ ජනක විශේෂයන් අවශ්‍යයි, ද්විතීය සිටින හැකිය. අපට දුෂ්කරයා, භූමියේ ගෞරවය හා ජනක සාර්වභාවයන් සහිත ලෙස අවිවාහ නැති හෝ හා සාකච්ඡාවක් බෙදා ගැනීමට යුතුය.",

      "බයිබ්ලිකල් ක්‍රිස්තුෂ්වරිය: YWAM බාහිර ච්‍රිස්තුෂ්වරියක් සඳහා හරියට වන්නේ එකමුතු බයිබ්ලිකල් ක්‍රිස්තුෂ්වරියක්. අපගේ ලිපිය - දිගු සහ වල්වැඩි ස්ථානවේ බයිබ්ලිකල් - සටහන් ඉදිරිපත් කරනු ලැබේ. වියෙහි නිවාස් දිනයේ ප්‍රතිමාන දුෂ්කරාන්ගේ ස්ථානය සහ සමහරවිට්ය හා අවස්ථාවේ බොහෝදෙනා ලෙස සේවාදායකයෙහි සියළු දුෂ්කරයා සහ ස්ථාපනයක් සහිත විය හැකිය. ස්ථානයේ නිවාස සහ නිවාස් සැසියාගේ අතීතාව සහිතව යුතුය. වියෙහි විස්තරය හා අතීතාවීම් පහසුකම් සැලකීම්කරුවන් සහ සාර්වභාවයක් සහිත සියලු දුෂ්කරයාන්, ස්ථාපනයන් සහ පුද්ගලයෙකු ඉස්සරීම සඳහා අපේ විශේෂ සාර්වභාවයට අරුත්කරණ අපිට එය නියමයෙන් සිටී.",

      "අනතුරු ආධාරක: අපි සියළුම නිවාස සහ ස්ථාපනයක් සම්බන්ධව අනතුරු සටහන්, හේතු හා සියලුම මධ්‍යම වියදම් වින්දනයක් සිටී. අපට මිනිසුන් පරිදි සාකච්ඡාවක් බෙදා ගනු ලැබේ, නිවාසේ සහිතව අවස්ථාවේ ඉස්සෙල්වීම සඳහා හැකිය.",

      "සමාජයේ සාකච්ඡාවක්: YWAM නිදහස් විස්තරයක් පහසුකම් සැලසීමේදී සමාජයේ විද්‍යායකයන් සහ සහාය දැක්කාමට හැකියාවක්. ඔව්න් හා වෙනත් පාලනේ, අන්තර්ජාතික රජයේ විශේෂිත මනෝචාර්යේ සහිතව අවශ්‍ය ලෙස හැකියාවක්. අපට හිමිකර පැහැදිලිවයායකයන්ගේ හා විරෝධයන්ට විරෝධයෙන් පැමිණෙනු ඇත.",

      "      නියමයෙන් වෙනස් කරන ලද සහිතයාම්: YWAM අපි සියළු සමාජයේ නිර්දේශිත සියලු දුෂ්කරයා, ස්ථාපනයක් හා පාලනේට අනුපාතියක් ලබා දුන් හෝ නොවේලාවේ ලිපියේ නියමය මිනිසුන්ගේ දැක්කාමට හැකියාවක්. අපට සියළු සාමාජිකයන්ගේ ස්ථාපනයන් සහිතව වියෙහි සිටී, ඔව්න් දැක්කාමට හැකියාවක්. අපට ස්ථාපනයක්, පාලනේ නිර්දේශිත සියලු දුෂ්කරයාන් සහ පාලනේට අනුපාතියක් ලබා ගනු ලැබේ නොවේලාවේ පාර්ශවීයන් සමගින්, ඉහළට සාමාජිකයාගේ දැක්කාමට නියමයට නොවේලාවේ සේවාදායකයාන්ට වෙනස් කරන ලද සහිතයාම්. අපේ ඉංජිනේරුවන් පවතින හැකියාවක් හා නිවාසේ පුද්ගලයාගේ විශ්වාස තත්ත්වයකින් හිමිකර නොගෙන ඇත.",
      "අනුරාගයෙහි විරෝධයන්: YWAM විසින් අපිට හේතු සහ ස්ථාපනයන්හි අනුරාගයේ ස්ථාපනයන් සහිතව සිටී. අපට වෙනස්වන සහිතවයෙන් අපට නියමයෙන් වෙනස් කරන ලද සහිතයාම්. අපට හිමිකර ගැනීමට එවීමේ හැකියාවක් හා නිවාසේ සහිතව අවස්ථාවේ සේවාදායකයන්ට නොගෙන ඇත.",
      "      ද්විතීය සිටින හැකියාව: YWAM විසින් අපිට භාෂා සහ දෙවන ජනකයන්, පිහිටුම්, ජයග්‍රාමයන්, සහයෝගිත්වය සහ ජනක විශේෂයන් අවශ්‍යයි. අපට භාෂා හා පිහිටුම්, සහයෝගිත්වය, ප්‍රදේශීය තරුණ හා ගින්දරීය ජයග්‍රාමයන් සහිතව විය හැකිය.",
      "      ප්‍රමුඛ-විශේෂ-හා සාර්වික විද්‍යායකයන්: YWAM විසින් සියලුම ජාතිය, ජාතියන්, සහ ස්ථාපතින් සිටින ප්‍රමුඛ-විශේෂ-හා සාර්වික විද්‍යායකයන්හි අවශ්‍යයි, විරෝධයන් ලෙස හා වෙනත් ජනක, සාර්වික සහිතව හැකිය. ඔවුන් අපේ ජාතියේ ස්ථාපනයක්, සහයෝගිත්වය, සහයෝගිත්වය, සහයෝගිත්වය, සහයෝගිත්වය, සහයෝගිත්වය, සහයෝගිත්වය, සහයෝගිත්වය, සහයෝගිත්වය, සහයෝගිත්වයෙන් ස්ථාපනයේ හා පිහිටුම් ජනකාරියන්ගේ හා වෙනත් ජනක, සාර්වික සාර්වික හා විරෝධයන් අවශ්‍යයි. අපට දුෂ්කරයා, ස්ථාපනයක්, හා වෙනත් ජනක හා සාර්වික විද්‍යායකයෙහි හා විරෝධයන් සිටින අවශ්‍යයි. ඔවුන් අපේ ස්ථාපනයේ සහිතව සිටී, අපට හිමිකර ගැනීමේ හැකියාවක් සහිතවාසිකාරීයයි.",
      "      සමාජවලින් ගෙන ඇති සහිතව: YWAM විසින් සියලුම ජාතියන්ගේ ස්ථාපනයක්, සහයෝගිත්වය, සහයෝගිත්වය, සහයෝගිත්වය, සහයෝගිත්වය, සහයෝගිත්වය, සහයෝගිත්වය, සහයෝගිත්වය, සහාර්වභාවයන්හි ගින්දරීයන්ට හැකියාවක්. අපට දුෂ්කරයා, ස්ථාපනයක්, හා පිහිටුම් දැක්කාමට නියමයෙන් හැකියාවක්.",
      "      ඔබගේ ජයග්‍රාමයේ වියදම: ඔබට ඔබගේ ජයග්‍රාමයක් වැඩියෙන්ම විශේෂයෙන් හිමිකර ගැනීමේ හැකියාවක්. අපට අපේ ජයග්‍රාමයේ ස්ථාපනයක් හා අනුපාතියක් හැකියාවක්. අපට ස්ථාපනයක් හා අනුපාතියක් සහිතව සිටී, නිවාසේ සහිතව අවස්ථාවේ හැකියාවක්. අපට ස්ථාපනයක් හා අනුපාතියක් සහිතව සිටී, නිවාසේ සහිතව අවස්ථාවේ හැකියාවක්",
      "      අපේ හැකියාවක්: YWAM විසින් සියලුම ජාතියන් අවශ්‍යයි, ස්ථාපනයක්, හා පිහිටුම් දැක්කාමට නියමයෙන් හැකියාවක්. අපට ඔබගේ ජාතියන්ට හැකියාවක්. ඔව්න් දැක්කාමට හැකියාවක්.",
    ],
    aboutUsBrief: "අපගේ නායකයා සහ කණ්ඩායම ගැන ඉගෙනීමට.",
    leadershipAndStaff: "නායකයා සහ කණ්ඩායම",
    baseLeader: "මූල් නායකයා",
    baseLeaderNames: "දිශාන්ත කන්දන්ගම හා මානොරී ජේකබ්",
    staff: "කණ්ඩායම",
    staffMembers: [
      "ශෂිකුමාර් ස්ටීවන්",
      "නදීශා චතුරංගනී",
      "එස්තර් නාත්මි",
      "ෂොන් කුමාරා",
      "පුෂ්පා කුමාරා",
      "තරුෂි දිලෙෂිකා",
      "ඩිසානායක පවසන්න (පවසන්න කණ්ඩායම)"
    ],
    volunteerStaff: "ස්වාමියානු කණ්ඩායම",
    volunteerStaffMembers: [
      "කවිශ්ක දනන්ජය"
    ],
    aboutUsDetails: "අපි ගැන සහ අපේ මෙහෙවර ගැන වැඩි විස්තර.",
    ministriesPage: {
      dtsCourseOverview: {
        title: "DTS පාඨමාලා සමාලෝචනය",
        description: "Forerunner Discipleship Training School (DTS) යනු, පන්ති කාලය, කුඩා කණ්ඩායම් ගතවීම්, පුද්ගලික පිළිබඳ සලකා බලන කාලය, ප්‍රායෝගික සේවාව සහ සමාජ ජීවිතය වැනි අංග රැසක් එකතු කරන මාස හයක වැඩසටහනකි. මෙම DTS මගින් ඔබට ඔබේ ආශා සහ ලෝකයේ දෙවියන්ගේ අරමුණ තුළ ඔබේ ස්ථානය සොයා ගැනීමට අවස්ථාව ලබා ගත හැක. ඔබට නව මාර්ග වලින් යේසුස්ව අනුගමනය කිරීමට උනන්දු නම් සහ විවිධ මැතිවරණයකින් යුක්ත වනු ඇත. පාසලේ දෙකක්: පන්ති ආගමික පටුන සහ පිටත ජාත්‍යන්තර මැතිවරණය.",
        items: [
          {
            title: "දෙවියන්ගේ පිළිගැනීම:",
            description: "පන්ති ආගමික පටුනේදී, ඔබේ අවධානය දෙවියන්ව, ඔහුගේ වචනය හා ඔහුගේ ලෝකය පිළිබඳව ය. ඔබේ පාරිභෝගික වර්ධනය, පෙනුමට නැවත සෙවීම සහ පුද්ගලික වර්ධනය සඳහා ඔබ උත්සාහ කරන්නෙයි. ඔබට උගත්ගැනීම හට ලැබෙයි මැතිවරණ සහ ප්‍රායෝගික පුහුණුව මඟින් පමණක් නොව, සමාජ ජීවිතය මඟින්ද වේ.",
          },
          {
            title: "දෙවියන්ගේ වචනව බෙදා හරිනු:",
            description: "පිටත ජාත්‍යන්තර මැතිවරණයදී, ඔබේ පන්ති ඉගෙනීම සක්‍රීය වීම සඳහා ජාත්‍යන්තර සේවාවන් වලට යොමුවේ. ඔබට ජනතාවට අත්පත් කිරීම සහ යේසුස්ගේ හොඳ පුවත බෙදාහරිම සඳහා අවස්ථාව ලැබේ.",
          },
        ],
      },
      schedule: {
        title: "අදාළ කාලසටහන",
        paragraphs: [
          "DTS වැඩසටහන පුරා, සිසුන් අධිකාංගික වර්ධනය, පුද්ගලික සංවර්ධනය සහ ප්‍රායෝගික හැකියාවන් ප්‍රවර්ධනය කිරීමට විවිධ ක්‍රියාකාරකම් වල නිරත විය යුතුයි. දෛනික කාලසටහන් සඳහා ප්‍රාර්ථනා සහ මැදitation සඳහා විශේෂිත කාලය ඇතුළත් වේ, එමඟින් සිසුන්ට දෙවියන් සමඟ ධාර්මික සම්බන්ධතාව ගැඹුරු කිරීමට සහ ආත්මික පදනමක් ලබා ගැනීමට අවස්ථාව ලබා දේ.",
          "පන්ති පාඩම් සහ සාකච්ඡා සඳහා යටතේ, සිසුන් ආවරණ පිළිබඳ පරිච්ඡේදන පීඩා සමඟ සම්බන්ධතා සහ ආසන සෙවීමට නියෝජනය කරන ආකාරයක් පෙන්වනු ඇත. මෙම පිළිබඳව පිළිවලන් සහ තැන් ගතවීම, අභීත හා පීඩා ලැබීමේ වටිනා මෙහෙවර ලබා දෙනාගේ අවස්ථාවන් ව්‍යසනයයි.",
          "අධ්‍යාපනික සහ ආත්මික ක්‍රියාකාරකම් මැද, සිසුන්ට ප්‍රායෝගික සේවා සහ සමාජ ජීවිතයේ යෙදෙමින්, පිටත කාර්ය මණ්ඩලයන්ට සහභාගී විය යුතුයි. මෙම කාර්ය මණ්ඩලයන්, DTS සමාජ ජීවිතයේ ක්‍රියාත්මක කිරීම සඳහා පමණක් නොව, සිසුන්ට සේවක-හදවත් ආකාරයක් සහ ප්‍රායෝගික ජීවිත හැකියාවන් වර්ධනය කිරීමට අවස්ථාව සපයයි.",
        ],
      },
      enrollmentInformation: {
        title: "අයදුම් කිරීමේ තොරතුරු",
        description: "YWAM Discipleship Training School (DTS) අයදුම්පත්‍රය",
        sections: {
          personalInformation: {
            title: "පුද්ගලික තොරතුරු:",
            fields: [
              "පුද්ගලික නාමය:",
              "උපන් දිනය:",
              "ස්ත්‍රී/පුරුෂ:",
              "ජාතිකත්වය:",
              "ඊ-තැපැල් ලිපිනය:",
              "දුරකථන අංකය:",
              "කැඳවීමේ ලිපිනය:",
            ],
          },
          spiritualBackground: {
            title: "ආත්මික පසුබැසීම:",
            fields: [
              "ඔබ ක්‍රිස්තියානි වී සිටින කාලය කීයද?",
              "ඔබේ සත්‍ය කතාව ව්‍යසනයක්:",
              "DTS කටයුත්තට සම්බන්ධ වීමට ඔබ කුමක් සඳහා ප්‍රයෝජනවත්ද?",
            ],
          },
          reference: {
            title: "හෙට පාර",
            fields: [
              "නම:",
              "ඊ-තැපැල් ලිපිනය:",
              "දුරකථන අංකය:",
            ],
          },
          medicalInformation: {
            title: "වෛද්‍ය තොරතුරු:",
            fields: [
              "ඔබට අපට දැනගැනීමට අවශ්‍ය වෛද්‍ය තත්ව හෝ පිළිතුරු තිබේද?",
              "ඔබ දැන් ඖෂධ භාවිතා කරනවාද? ඔව් නම්, කරුණාකර විස්තර කරන්න.",
              "ඔබට වෛද්‍ය බima ආධාර ඇතිද? ඔව් නම්, කරුණාකර විස්තර ලබා දෙන්න.",
            ],
          },
          languageProficiency: {
            title: "භාෂා දක්ෂතාව:",
            fields: [
              "ඔබ ඉංග්‍රීසියෙන් දක්ෂද? (ඔව්/නැත)",
              "ඔව් නම්, කරුණාකර ඔබේ ඉංග්‍රීසි දක්ෂතාවයේ ශ්‍රේණිය සදහන් කරන්න: ආරම්භක/මැද/උසස්",
            ],
          },
          financialInformation: {
            title: "මුදල් තොරතුරු:",
            fields: [
              "ඔබ DTS මැතිවරණයට ඔබගේ සහභාගීත්වය මූල්‍යය කෙසේ සම්බන්ධ කරනවාද?",
              "ඔබ මුදල් සහාය අවශ්‍යද? (ඔව්/නැත)",
              "ඔව් නම්, ඔබේ මුදල් තත්ත්වය සහ විශේෂ අවශ්‍යතා පැහැදිලි කරන්න.",
            ],
          },
          availability: {
            title: "ලබාගැනීම:",
            fields: [
              "ඔබ DTS ආරම්භ කිරීමට කවදා ලබාගත හැකිද?",
              "පස්සේ වැඩසටහන සඳහා ඔබ ලබාගත නොහැකි විශේෂ දිනයක් තිබේද?",
            ],
          },
          additionalComments: {
            title: "අමතර අදහස් හෝ ප්‍රශ්න:",
            fields: [
              "අමතර අදහස් හෝ ප්‍රශ්න:",
            ],
          },
        },
        submitButton: "ඉදිරිපත් කරන්න",
      },
      churchPlantingInitiatives: {
        title: "ගවණික පලාත් පරිසර",
        description: "අපගේ ගවණික පලාත් ප්‍රයෝගිකතා පිළිබඳ සාර්ථක කතා අසා ගැනීමට කැමතිද? (ඔව්/නැත)",
        initiatives: [
          {
            name: "Lanka Faith Mission Church, Agunawala, Peradeniya",
            activities: [
              "සැදුම්",
              "බයිබලයේ පශ්චාත්",
              "ඉරිදා පාසල",
              "සංශෝධන",
              "යූත් සේවා",
              "බයිබල අධ්‍යනය",
            ],
            successStories: [
              "සමාජය පිළිබඳ බලපෑම: 25 කුටීන් වඩා වැඩි පවුල් සමඟ සක්‍රීයව පවතින බව",
              "අවශ්‍යතාවයන්ට ගැලපෙන පරිසර සෑදීම.",
            ],
          },
          {
            name: "New Generation Church, Kiribathgoda",
            activities: [
              "සැදුම්",
              "ප්‍රාර්ථනා මැදිතේෂණය",
              "සුදුසු ජනතාවට ආකර්ෂණය",
              "සමාජ සේවා",
              "අධ්‍යනය සහ පුහුණුව",
            ],
            successStories: [
              "ප්‍රාර්ථනා සම්මුතිය: 50 කට වැඩි සාමාජිකයන්ගේ සහභාගීත්වය",
              "සමාජ පිළිවලන්ගේ වැඩි සහයෝගීතාව",
            ],
          },
        ],
        successStoriesTitle: "සාර්ථක කතා:",
      },
      participationInterest: "ඔබට මෙම ගවණික පලාත් මැතිවරණ සඳහා සහභාගී වීමට මනාප වේද? (ඔව්/නැත)",
    },
  coursesPage: {
    upcomingCourses: "ඉදිරි පාඨමාලා",
    coursesList: [
      { title: "DTS පුහුණු" },
      { title: "මිණි DTS" },
      { title: "සාමාජික සෙවණුකරණ මූලික පාඨමාලාව (MCFC)" },
      { title: "LTS" }
    ],
    mcfc: {
      title: "සාමාජික සෙවණුකරණ මූලික පාඨමාලාව (MCFC)",
      description: "සාමාජික සෙවණුකරණ මූලික පාඨමාලාව (MCFC) සෙවණුකරණය පිළිබඳ සම්පූර්ණ තේරුමක් වටා පදනම් විය යුතුය, 'කීන්ඩම් සේවකයන්ගේ කාර්යක්ෂම සේවාව සඳහා විශේෂිත සහ විශේෂිත උදව්.' මෙය පරිපූර්ණව ප්‍රායෝගික සේවය සදහා අනුන්ගේ නිවැරදිව සපයන හැටන් පියවරවල මූලික වශයෙන් සම්බන්ධ වේ:",
      items: [
        "අනිවාර්ය සෙවණුකරණය: ආත්මික සුවය සඳහා සහ දේවයේ ගැටුම් සහ මනුෂ්‍ය ජීවිතය පිළිබඳ සම්බන්ධය සහ ලැබූ කෙටි අවස්ථා.",
        "ස්වයං සෙවණුකරණය: පෞරස්පික සෞඛ්‍යය, සම්බන්ධිත ශක්තිය, සහ සීමාවන් සහ ස්වයං-අවබෝධය.",
        "සාමාජික සෙවණුකරණය (අනුකූල සෙවණුකරණය): කාර්මිකයන් සහ කණ්ඩායම් සාමාජිකයන් අතර සහාය සහ අනුකූල සෙවණුකරණ සම්ප්‍රදාය.",
        "බොස් සැලසුම්: සෙවකයන්ගේ ආත්මික ගමන සහ සේවය සඳහා මාර්ගෝපදේශය සහ උපදේශනය.",
        "සංවිධානාත්මක සෙවණුකරණය: සෙවකයන්ට නිවැරදිව යොදා ගැනීම සඳහා සංවිධාන සහ අලවිකරණ සහාය පද්ධති.",
        "යොමුකරු/ආධාරකයන්ගේ සෙවණුකරණය: සහාය සහ යොමුකරු සංවිධානයන් සමඟ සෞඛ්‍ය සම්බන්ධතා.",
        "विशेषज्ञ सेवनुकरणය: ක්ෂේම සෙවකයන්ගේ විශේෂිත ගැටළු හෝ අවශ්‍යතා සදහා කටයුතු සහ සම්පත්."
      ],
      details: "මෙම තිස්සේ අභිලාෂීය තුන් සති පාඨමාලාව තුළ, ගැටළු සම්බන්ධීකාරක මාර්ගෝපදේශයන්වල සහ නිවහල් සහ ප්‍රයෝගික උපකාර සමඟ විවිධ කුසලතා ඉගෙනීම සහ පරිපූර්ණ මාර්ගෝපදේශයන් සම්පුර්ණව තේරුම් ගැනීමට සහ පවත්වා ගැනීමට සූදානම් වන්න.",
      resources: "ඔවුන්ගේ ඉගෙනුම් අත්දැකීම් වඩාත් වැඩියෙන් යාවත්කාලීන කිරීම සඳහා, ශිෂ්‍යයන්ට විශේෂිත පුහුණු මාර්ගෝපදේශයක් සහ ඩිජිටල් පොත් මැදුරු සොයා ගැනීමට සහ අනුමාන සම්පත් ලබා දේ. මෙම සම්පත් අලුත් කරන කාලය වඩාත් ඉක්මන් නොමැතිව ශිෂ්‍යයන්ට ආධාර කිරීමට සැලසුම් කරන ලදී. සටහන් සහ පවරන අයෝජනයන්හි සියලු සටහන් සහ PowerPoint ඉදිරිපත් කිරීම් ද ලබා දේ.",
    },
    enrollmentInformation: {
      title: "පරීක්ෂා කිරීමේ තොරතුරු",
      description: "අපගේ ඉදිරි පාඨමාලා එකකට සහභාගී වීමට ඔබගේ රුචිය සඳහා ස්තූතියි. වැඩසටහන සඳහා අයදුම් කිරීමට කරුණාකර පහත ආකෘතිය පුරන්න.",
      personalInformation: {
        title: "පුද්ගලික තොරතුරු",
        fields: [
          "සම්පූර්ණ නාමය:",
          "උපන් දිනය:",
          "ලිංගය:",
          "ජාතිකත්වය:",
          "ඊ-මේල් ලිපිනය:",
          "දුරකථන අංකය:",
          "ලිපිනය:"
        ]
      },
      spiritualBackground: {
        title: "ආත්මික පසුබැසීම",
        fields: [
          "ඔබ කීයේද ක්‍රිස්තියානික වීමේ කාලය?",
          "ඔබගේ සාක්ෂි බෙදාගන්න:",
          "ඔබ පාඨමාලාවේ සහභාගී වීමට ආසාවෙන්නේ කුමක්ද?"
        ]
      },
      reference: {
        title: "යොමුකරු",
        fields: [
          "නාමය:",
          "ඊ-මේල් ලිපිනය:",
          "දුරකථන අංකය:"
        ]
      },
      medicalInformation: {
        title: "සෞඛ්‍ය තොරතුරු",
        fields: [
          "ඔබට අවධානය යොමු කළ යුතු සෞඛ්‍ය තත්ත්වයන් හෝ ආසාදන ඇතිද?",
          "ඔබ දැන් ඕනෑම මැඩිකේෂන් ගනිමින් සිටීද? ඔව් නම්, කරුණාකර විස්තර කරන්න.",
          "ඔබට සෞඛ්‍ය විරෝධතාවක් තිබේද? ඔව් නම්, කරුණාකර විස්තර ලබා දෙන්න."
        ]
      },
      languageProficiency: {
        title: "භාෂා දක්ෂතා",
        fields: [
          "ඔබට ඉංග්‍රීසිය හොඳින් දැනෙයිද? (ඔව්/නැ)",
          "ඔව් නම්, ඔබේ ඉංග්‍රීසි දක්ෂතාව මට්ටම: ආරම්භක/අන්තර්ජාතික/උසස්"
        ]
      },
      financialInformation: {
        title: "මූල්‍ය තොරතුරු",
        fields: [
          "පාඨමාලාවට සහභාගී වීමට ඔබට කෙසේ වාහනය කරන්න යන්න යෝජනා කරනවාද?",
          "ඔබට මූල්‍ය සහාය අවශ්‍යද? (ඔව්/නැ)",
          "ඔව් නම්, කරුණාකර ඔබේ මූල්‍ය තත්ත්වය සහ විශේෂ අවශ්‍යතා පැහැදිලි කරන්න."
        ]
      },
      availability: {
        title: "ලබා ගත හැකි බව",
        fields: [
          "ඔබ පාඨමාලාව ආරම්භ කිරීමට කිසියම් සමාගම් ඇතැයි ඔබට ලබා ගත හැකිද?",
          "ඔබට යමක් සෙවණුකරණ අවශ්‍යතාවක් තිබේද?"
        ]
      },
      additionalComments: {
        title: "ඉහත අදහස් හෝ ප්‍රශ්න",
        fields: [
          "අදහස් හෝ ප්‍රශ්න:",
          "කලාපය"
        ]
      },
      submitButton: "ඉදිරිපත් කරන්න"
    }
  },
  contactUsPage: {
    title: "අප හා සම්බන්ධ වෙන්න",
    description: "ඔබේ පණිවිඩයන් සහ ප්‍රතිචාර වලට අපි සතුටු වන අතර, කරුණාකර අප හා සම්බන්ධ වන්න!",
    formTitle: "අප සමඟ සම්බන්ධ වන්න",
    form: {
      name: "නාමය",
      email: "ඊ-මේල්",
      phone: "දුරකථන අංකය",
      address: "ලිපිනය",
      message: "පණිවිඩය",
      submitButton: "ඉදිරිපත් කරන්න"
    },
    contactInfo: {
      title: "අපගේ සම්බන්ධ තොරතුරු",
      addressLabel: "ලිපිනය",
      address: "123 මැයින් ගෙදර, හෝම්ටවුන්, ABC 12345",
      phoneLabel: "දුරකථන",
      phone: "+1 (123) 456-7890",
      emailLabel: "ඊ-මේල්",
      email: "contact@example.com"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.6728283379816!2d79.96871595103237!3d6.927079990545737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b5c26c3b7a5%3A0xf7d0134caa4fd2d2!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1631316356789!5m2!1sen!2sus",
    socialMedia: {
      title: "අපව අනුගමනය කරන්න",
      links: [
        {
          name: "ෆේස්බුක්",
          url: "https://facebook.com/yourpage",
          icon: "/assets/facebook-icon.png"
        },
        {
          name: "ට්විටර්",
          url: "https://twitter.com/yourpage",
          icon: "/assets/twitter-icon.png"
        },
        {
          name: "ඉන්ස්ටග්‍රෑම්",
          url: "https://instagram.com/yourpage",
          icon: "/assets/instagram-icon.png"
        }
      ]
    },
    faqTitle: "නිතර ඉල්ලන ප්‍රශ්න",
    faqItems: [
      {
        question: "පාරිභෝගික සහයෝගය කෙසේ සම්බන්ධ කරගත හැකිද?",
        answer: "ඔබට අපගේ පාරිභෝගික සහයෝගයට support@example.com ඊ-මේල් මාර්ගයෙන් හෝ +1 (123) 456-7890 දුරකථන අංකයෙන් සම්බන්ධ විය හැක."
      },
      {
        question: "ඔබේ ආසනය කොහිද?",
        answer: "අපි 123 මැයින් ගෙදර, හෝම්ටවුන්, ABC 12345 සිට සිටිමු."
      },
      {
        question: "ඔබගේ වාණිජ පැය කීයද?",
        answer: "අපගේ වාණිජ පැය සඳුදා සිට සිකුරාදා දක්වා, උදෑසන 9 සිට අලුයම් 5 දක්වා වේ. සති අන්තයේ අපි වසා ඇත."
      }
    ]
  },  
  eventsPage: {
    title: "සිදුවීම්",
    description: "ඉදිරියේ සිදුවන සිදුවීම් සහ ක්‍රියාකාරකම්.",
    eventList: [
      {
        title: "සමාජ සේවා වැඩසටහන",
        date: "ඔක්තෝබර් 5, 2024",
        description: "අපගේ සමාජ සේවා දිනයට එක්වන්න.",
        image:""
      },
      {
        title: "වාර්ෂික රැස්වීම",
        date: "නොවැම්බර් 15, 2024",
        description: "අපගේ වාර්ෂික රැස්වීමේ අමතක කරන්න.",
        image:""
      },
      {
        title: "යෞවන රැස්වීම",
        date: "දෙසැම්බර් 20, 2024",
        description: "යෞවන විශ්වාසය සහ මිතුරන් අතර පිළිගැනීමට සතියක්.",
        image:""
      },
    ],
  },
  donatePage: {
    title: "දායක වන්න",
    description: "අපගේ මෙහෙවරට දායක වීමෙන් සහය වන්න.",
    form: {
      name: "නාමය",
      email: "ඊ-මේල්",
      amount: "දායකත්ව ප්‍රමාණය",
      message: "පණිවිඩය (විකල්ප)",
      submitButton: "දැන් දායක වන්න"
    },
    thankYouMessage: "ඔබගේ උත්තරීතර සහායට ස්තූතියි!"
  },
  blogNewsPage: {
    title: "බ්ලොග්/ප්‍රවෘත්ති",
    description: "නවතම යාවත්කාලීන තොරතුරු, ප්‍රවෘත්ති සහ ලිපි.",
    posts: [
      {
        title: "YWAM කෑන්ඩියේ නව සමාජ සේවා වැඩසටහන",
        date: "සැප්තැම්බර් 1, 2024",
        excerpt: "අපි සතුටුය අලුත්ම සමාජ සේවා වැඩසටහනක් ආරම්භ කිරීම සම්බන්ධව.",
        image:"/assets/community.jpg",

      },
      {
        title: "සාර්ථක DTS ගෘඩුවේෂන්",
        date: "අගෝස්තු 20, 2024",
        image:"/assets/yout-.png",
        excerpt: "අපගේ ධර්මික පුහුණුව පිළිබඳ පාසල (DTS) තවත් පරාක්කුන් එකතු කරයි.",
      },
      {
        title: "ඉදිරි සYouth Retreat",
        date: "ජූලි 15, 2024",
        image:"/assets/yout-.png",
        excerpt: "අපගේ වාර්ෂික යෞවන රැස්වීමේ අමතක කරන්න, ආත්මීය වර්ධනය හා මිතුරන් අතර සමීපතා.",
      },
    ],
  },
  getInvolvedPage: {
    title: "සම්බන්ධ වන්න",
    description: "අපගේ මෙහෙවර සමඟ සම්බන්ධ වීමේ ආකාර හොයා ගන්න සහ වෙනසක් කරන්න.",
    sections: {
      volunteering: {
        title: "සභාගී වීම",
        description: "විවිධ ක්‍රියාකාරකම් සහ ප්‍රතිඵල වැඩසටහන් සඳහා සහාය වීමට අප හා සභාගී වන්න.",
      },
      donations: {
        title: "දායකත්වය",
        description: "අපගේ මෙහෙවරට මූල්‍යමය සහාය ලබා දී වැඩිම මිනිසුන්ට ළඟා වීමට සහ අපගේ වැඩසටහන් දිගටම ගෙන යාමට සහය වන්න.",
      },
      partnerships: {
        title: "සහායෝගීතා",
        description: "උත්සාහක හුවමාරු සහ බෙදා ගැනීමේ සම්පත් මගින් සාර්ථක පළපුරුදු සාදා ගැනීමට අප සමඟ එකට කටයුතු කරන්න.",
      },
      events: {
        title: "සිදුවීම්",
        description: "අපගේ ව්‍යාපෘති සඳහා වගකිව යුතු මට්ටම් සහ සහය දැමීමට සිදුවීම් සංවිධානය කිරීම හෝ සභාගී වීම.",
      },
    },
  },
  prayerPointsPage: {
    title: "ප්‍රාර්ථනා ලක්ෂණ",
    description: "අපේ සමාජය සඳහා වැදගත් ප්‍රාර්ථනා ලක්ෂණ මෙතැනින් ලබා ගන්න.",
    points: [
      "ආගමික ප්‍රවර්ධන වැඩසටහන සඳහා හොඳ ප්‍රතිඵලයක් ලබා ගැනීමට ප්‍රාර්ථනා කරන්න.",
      "මූලික තීරණ ගන්නා විනිමය සහ ශක්තිය සඳහා අපේ නායකයින්ට ප්‍රාර්ථනා කරන්න.",
      "අපේ සමාජය තුළ එකතාව සහ වර්ධනය සඳහා ප්‍රාර්ථනා කරන්න.",
      "අපගේ සාමාජිකයින්ගේ සෞඛ්‍ය සහ සුවය සඳහා ප්‍රාර්ථනා කරන්න.",
      "අපේ විවිධ වැඩසටහන් සහ ආරම්භයන්ට සහය වීම සඳහා මූල්‍යමය ආධාර සඳහා ප්‍රාර්ථනා කරන්න."
    ],
  },
  
}
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'SI' : 'EN'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);