const quizData = {
  'Chapter 1: Introduction to Technical Writing': [
  {
    question: "What is the primary purpose of technical writing?",
    options: [
      "To entertain the reader with fictional stories and expressive language.",
      "To convey information about specialized topics to professionals in a clear and effective manner.",
      "To express personal experiences and emotions subjectively.",
      "To report news and current events objectively to the general public."
    ],
    correct: 1,
    explanation: "Technical writing is a form of communication that professionals use to convey information about specialized topics.  It is designed for users in technical fields such as engineering, chemistry, computer information software and systems, medical professions, robotics, automotive, etc. "
  },
  {
    question: "Which of the following is NOT a primary goal of technical writing?",
    options: [
      "To inform the audience by anticipating and answering their questions.",
      "To instruct the audience on how to perform a task.",
      "To persuade the audience using explanations and solutions.",
      "To create fictional characters and plots."
    ],
    correct: 3,
    explanation: "Technical writing is designed to: Inform by anticipating and answering audience questions; Instruct the audience to perform a task or follow a procedure, and persuade the audience via explanations, analysis, and solutions.  Creative writing, not technical writing, involves fictional characters and plots. "
  },
  {
    question: "According to the lecture, technical writing focuses on which of the following?",
    options: [
      "Personal narratives and descriptions.",
      "Products and services, including their manufacture, marketing, and use.",
      "Arguments and persuasion using connotative words.",
      "News stories and editorials based on factual observation."
    ],
    correct: 1,
    explanation: "Technical writing is communication written for and about business and industry, focusing on products and services: how to manufacture them, market them, manage them, deliver them, and use them. "
  },
  {
    question: "Which characteristic distinguishes technical writing from other forms of writing like creative or expressive writing?",
    options: [
      "It is subjective and based on personal experience.",
      "It uses connotative and expressive words.",
      "It is objective and uses denotative words.",
      "It focuses on creating imagery and fictional plots."
    ],
    correct: 2,
    explanation: "Technical Writing is objective, written about products or services, uses short sentences and paragraphs, and denotative words. In contrast, Creative and Expressive writing are more subjective and use connotative words. "
  },
  {
    question: "What is the first step in the process of creating a Technical Report?",
    options: [
      "Search, read and cite literature.",
      "Elaborate the text on a computer.",
      "Accept and analyze the task.",
      "Perform the final check."
    ],
    correct: 2,
    explanation: "The required work steps to create Technical Reports begin with: Accept and analyze the task. "
  },
  {
    question: "When analyzing the task for a technical report, what is a crucial question to ask about the audience?",
    options: [
      "What are the readers' favorite colors?",
      "Who belongs to the target group? For whom do I write the report?",
      "How many people will read the report?",
      "Will the readers share the report on social media?"
    ],
    correct: 1,
    explanation: "During the planning of the Technical Report, you should analyze the task precisely. An important question to ask is: Who belongs to the target group? For whom do I write the report? Please take notes accordingly! "
  },
  {
    question: "What are the requirements for a good title of a technical report?",
    options: [
      "It should be long, detailed, and include many adjectives.",
      "It should be mysterious and not reveal the main topic.",
      "It should contain the main topic, be short, precise, and true.",
      "It should only be created by the supervisor or customer."
    ],
    correct: 2,
    explanation: "The title shall contain the main topic or the main keywords of the report, it shall be short, precise, and true. It shall have a good speech melody and create interest. "
  },
  {
    question: "What is the main reason for the importance of 'Audience' in technical communication?",
    options: [
      "To make the document longer and more complex.",
      "To use as much technical jargon as possible.",
      "To translate technical information for non-specialists to understand.",
      "To write only for specialists in the field."
    ],
    correct: 2,
    explanation: "The audience element is so important that it is one of the cornerstones of this course: you are challenged to write about highly technical subjects but in a way that a beginner a nonspecialist could understand. This ability to 'translate' technical information to non-specialists is a key skill to any technical communicator. "
  },
  {
    question: "What is a key ethical responsibility for a technical writer regarding data?",
    options: [
      "To use charts and tables that skew data to support a conclusion.",
      "To avoid referencing experts to sway readers' support.",
      "To use emotional words and phrases to appeal to the reader.",
      "To use accurate numbers to report data."
    ],
    correct: 3,
    explanation: "Also, technical writers must use accurate numbers to report data, avoiding charts and tables that skew data. "
  },
  {
    question: "What is an ethical requirement concerning sources in technical writing?",
    options: [
      "It is acceptable to rearrange information to appear as the original source.",
      "Citing sources is optional if the information is common knowledge.",
      "All sources must be referenced accurately in the text and cited on a reference page.",
      "You only need to cite the sources you agree with."
    ],
    correct: 2,
    explanation: "All sources must be referenced accurately in the text and cited on a reference page. "
  },
  {
    question: "When writing for readers from other cultures, what is suggested regarding vocabulary?",
    options: [
      "Use a wide and complex vocabulary to show expertise.",
      "Every word should have only one meaning.",
      "Use as many idioms as possible to sound more natural.",
      "Assume all readers know common English abbreviations."
    ],
    correct: 1,
    explanation: "Limit your vocabulary. Every word should have only one meaning, as called for in Simplified English and in other basic-English languages. "
  },
  {
    question: "Why should the active voice be used when writing for a multicultural audience?",
    options: [
      "The passive voice is more formal and respectful.",
      "The active voice is more complex and challenging.",
      "The active voice is easier for nonnative speakers of English to understand.",
      "The active voice allows for longer and more descriptive sentences."
    ],
    correct: 2,
    explanation: "Use the active voice whenever possible. The active voice is easier for nonnative speakers of English to understand than the passive voice. "
  },
  {
    question: "What does it mean for a technical document to be 'Accessible'?",
    options: [
      "The document is written by a team of writers.",
      "The information is explained and presented in a style that is easy to understand and follow.",
      "The document uses only the words it needs.",
      "The document is only available online."
    ],
    correct: 1,
    explanation: "Accessible - Think about the users of your document... the information must be explained and presented in a style that is easy to understand and follow. "
  },
  {
    question: "What does writing 'concisely' mean in technical writing?",
    options: [
      "Using fewer words, even if it sacrifices clarity.",
      "Using all the words you need but only the words you need.",
      "Writing very short documents.",
      "Avoiding lists and headings."
    ],
    correct: 1,
    explanation: "Concise - To write concisely does not mean to use fewer words. Instead, it means to use all the words you need but only the words you need. "
  },
  {
    question: "How does the organization of technical writing differ from that of an essay?",
    options: [
      "Technical writing does not have an introduction, body, or conclusion.",
      "Technical writing uses a subject line instead of a thesis and itemization instead of transitional words.",
      "Essays use topic sentences, but technical writing never does.",
      "There is no difference in organization."
    ],
    correct: 1,
    explanation: "In terms of Organization, technical writing uses a subject line vs. a thesis and itemization of points vs. transitional words. "
  },
  {
    question: "What is the role of document design in technical writing compared to essays?",
    options: [
      "Document design is not a factor in technical writing.",
      "Essays use more highlighting techniques than technical writing.",
      "Technical writing uses highlighting techniques like graphics, headings, and bullets, while it is not usually a factor in essays.",
      "Both use the same document design principles."
    ],
    correct: 2,
    explanation: "Technical Writing uses highlighting techniques, such as graphics, headings, subheadings, various fonts, white space, bullets, etc. In essays, this is not usually a factor. "
  },
  {
    question: "Who is considered a 'primary reader' of a technical document?",
    options: [
      "Someone who only reads sections that relate to them.",
      "The person who ordered the report to be written or for whom it is intended.",
      "Anyone who proofreads the document.",
      "A colleague from a different department."
    ],
    correct: 1,
    explanation: "A primary reader is the person who ordered the report to be written or the person for whom the report is intended. These readers will usually read the entire report. "
  },
  {
    question: "Why are headings significant for 'secondary readers'?",
    options: [
      "Headings make the document look more aesthetically pleasing.",
      "Headings allow secondary readers easy access to the specific information that relates to them.",
      "Headings are only for the primary reader's benefit.",
      "Headings increase the total word count of the document."
    ],
    correct: 1,
    explanation: "Secondary readers are those readers who will read only the sections of the report that relate to them... This is where format, the use of headings, is significant in allowing the reader easy access to information. "
  },
  {
    question: "What are the recommended font types for headings and body text in technical documents?",
    options: [
      "Serif font for headings, Sans serif for body text.",
      "The same font for both headings and body text.",
      "Sans serif for headings, Serif font for body text.",
      "Any decorative font is acceptable for both."
    ],
    correct: 2,
    explanation: "Headings: Sans serif, such as Arial or Calibri. Body text: Serif font, such as Times New Roman or Cambria. "
  },
  {
    question: "What is the general rule for paragraph and sentence length in technical documents?",
    options: [
      "Paragraphs should be at least 20 lines, and sentences 30-40 words.",
      "Paragraphs tend to be no longer than 10 lines, and sentences are usually 15-20 words.",
      "There are no rules for paragraph and sentence length.",
      "Paragraphs and sentences should be as long as possible to include more detail."
    ],
    correct: 1,
    explanation: "Paragraphs tend to be no longer than 10 lines. Sentences are usually 15-20 words. "
  }
],
'Chapter 2: Components of a Technical Report': [
  {
    question: "Which of the following is NOT a classification of technical reports by content?",
    options: [
      "Feasibility report",
      "Investigation report",
      "Quarterly report",
      "Occurrence report"
    ],
    correct: 2,
    explanation: "Technical reports that are classified by content: Occurrence report, Field trip report, Feasibility report, Investigation report, Evaluation report.  Quarterly reports are classified by regularity. "
  },
  {
    question: "What is the purpose of a technical proposal?",
    options: [
      "To describe an event that has already occurred.",
      "To give a brief account of staff deployment.",
      "To convince another company of its technical capability to offer a service or perform a task.",
      "To assess whether a project is economically or technically feasible."
    ],
    correct: 2,
    explanation: "Technical proposal: which is normally prepared by a company to convince another company or institution of its technical capability to offer a specific service or perform a specific task. "
  },
  {
    question: "A technical report is typically divided into which three main parts?",
    options: [
      "Introduction, Body, Conclusion",
      "Beginning, Middle, End",
      "Preliminary Matter, Main Report, End Matter",
      "Abstract, Findings, References"
    ],
    correct: 2,
    explanation: "Unit 2 is divided into three parts - Preliminary Matter, Main Report, and End Matter. "
  },
  {
    question: "Which of these components belongs in the 'Preliminary Matter' of a technical report?",
    options: [
      "Executive Summary",
      "Recommendations",
      "Appendixes",
      "Table of Contents"
    ],
    correct: 3,
    explanation: "The Preliminary Matter includes The Cover, The Title Page, The Table of Contents, The Transmittal Letter, Terms of Reference, Scope and Limitations, and Technical Terms and Symbols. "
  },
  {
    question: "What is a key requirement for the title of a Technical Report?",
    options: [
      "It must be at least two lines long.",
      "It must contain the main topics or main keywords and be short and accurate.",
      "It must be written in all capital letters.",
      "It must avoid creating any interest or curiosity."
    ],
    correct: 1,
    explanation: "Requirements of the title of the Technical Report: The title must be clear, true, honest, short and accurate, it must contain the main topics or main keywords (for data base searches!). "
  },
  {
    question: "What is the function of a Transmittal Letter?",
    options: [
      "To provide a detailed summary of the entire report.",
      "To list all the technical terms used in the report.",
      "To formally present the report to the client who requested it.",
      "To discuss the findings and conclusions in detail."
    ],
    correct: 2,
    explanation: "A short, formal letter normally accompanies a commissioned report. In essence, it says, 'here's the report you asked me/us to write. I/We hope you find it useful.' "
  },
  {
    question: "What should be included in the 'Scope and Limitations' section?",
    options: [
      "A discussion of the results.",
      "A list of references.",
      "Clear scope notes and a statement of any known limitations of the report.",
      "The biodata of the authors."
    ],
    correct: 2,
    explanation: "You should make your scope notes clear and precise. Any known limitations of the report should be similarly stated and hence the reservations and precautions that have to be exercised in reading and/or using it. "
  },
  {
    question: "Which of the following belongs in the 'Main Report' section?",
    options: [
      "Title Page",
      "Executive Summary",
      "Table of Contents",
      "Appendixes"
    ],
    correct: 1,
    explanation: "The Main Report section includes the Executive Summary, Methods of Data Collection, Analysis and Interpretation of Data, Findings/Results, Discussion and Conclusions, and Recommendations. "
  },
  {
    question: "How does an 'Executive Summary' differ from an 'abstract'?",
    options: [
      "It is shorter than an abstract.",
      "It is a rather comprehensive overview of the report, intended for a busy executive.",
      "It only includes the recommendations.",
      "It is placed at the end of the report."
    ],
    correct: 1,
    explanation: "This is much more than an 'abstract' or 'summary' in a scientific paper. It is a rather comprehensive overview of what the reader is going to find in the body of the report. You should write it keeping in mind the busy executive who will have neither the inclination nor the time to read the whole of your report. "
  },
  {
    question: "What is the main difference between 'findings' and 'results'?",
    options: [
      "There is no difference.",
      "'Findings' are from experimental research, while 'results' are from field observations.",
      "'Results' are generally the outcome of experimental research, while 'findings' normally relate to field observations.",
      "'Results' are subjective, while 'findings' are objective."
    ],
    correct: 2,
    explanation: "Generally, 'results' are the outcome of experimental research, while 'findings' normally relate to field observations. "
  },
  {
    question: "The recommendations in a report must derive from what?",
    options: [
      "The author's personal opinions.",
      "Material from outside the report.",
      "The biodata of the authors.",
      "Material scientifically derived from within the report."
    ],
    correct: 3,
    explanation: "In particular, always remember that your recommendations must derive scientifically from material within, not outside, the report. "
  },
  {
    question: "Which of these components would be found in the 'End Matter' of a report?",
    options: [
      "Executive Summary",
      "Introduction",
      "Appendixes",
      "Methods of Data Collection"
    ],
    correct: 2,
    explanation: "The 'end matter' comprises material which, though important, is not essential to the understanding or even appreciation of your report... 1. Appendixes 2. Biodata of Author(s) 3. References, and Bibliography 4. Acknowledgment 5. Distribution List. "
  },
  {
    question: "What kind of information is typically placed in an appendix?",
    options: [
      "The executive summary.",
      "The main conclusions.",
      "Statistics, photographs, or questionnaires that are too cumbersome for the main body.",
      "The table of contents."
    ],
    correct: 2,
    explanation: "This is where to place statistics, photographs, questionnaires, interview schedules, and such other information necessary to your report but too cumbersome to include in the main body without disturbing your trend of thought. "
  },
  {
    question: "What is the difference between a list of 'References' and a 'Bibliography'?",
    options: [
      "A bibliography only lists published sources.",
      "A list of references is always longer than a bibliography.",
      "They are the same thing.",
      "A bibliography includes all sources consulted, even if not mentioned in the report, while references are cited in the report."
    ],
    correct: 3,
    explanation: "A bibliography includes all documentary sources consulted but not necessarily mentioned in the main body of your report.  Unless your report is essentially academic, a list of references in the report will do without a bibliography. "
  },
  {
    question: "What is the purpose of an 'Audit Report'?",
    options: [
      "To convince a client of technical capability.",
      "To comment on the efficiency of a company's financial and material accounts.",
      "To describe a flood disaster.",
      "To propose a new idea in depth."
    ],
    correct: 1,
    explanation: "An audit report is a short comment on the degree of efficiency with which a company has operated its financial and material accounts and kept records of such operations. "
  },
  {
    question: "What is the purpose of the 'Terms of Reference' section in a commissioned report?",
    options: [
      "To acknowledge those who helped with the report.",
      "To list the authors' biodata.",
      "To enable clients to evaluate the report and to adjudicate in any disputes.",
      "To present the main findings of the study."
    ],
    correct: 2,
    explanation: "While the primary value of this part of the report is to enable the clients evaluate the product they had contracted to pay for, it may also serve to adjudicate in any dispute between the clients and the writer(s) of the report. "
  },
  {
    question: "When listing technical terms and symbols, what should you include?",
    options: [
      "A general list of all terms in that field of science.",
      "Only the terms that have been used in your report.",
      "Only symbols, not terms.",
      "Only the most common and well-known terms."
    ],
    correct: 1,
    explanation: "You should list and explain only those that have been used in your report, not some general list of terms and symbols in a particular branch of science. "
  },
  {
    question: "In the 'Discussion and Conclusions' section, what is the expected relationship between the two parts?",
    options: [
      "The conclusions should be presented first, then the discussion.",
      "The discussion and conclusions are unrelated.",
      "The discussion should lead logically to the conclusions.",
      "This section should only contain conclusions, not discussion."
    ],
    correct: 2,
    explanation: "Your discussion should lead logically to your conclusions for the study, and you will be wise to number all your conclusions for easy grasp. "
  },
  {
    question: "What is the purpose of including the biodata of the author(s)?",
    options: [
      "To increase the page count of the report.",
      "To facilitate the reader's evaluation of authors' qualifications and experience.",
      "It is a mandatory legal requirement for all reports.",
      "To provide contact information for the authors."
    ],
    correct: 1,
    explanation: "You should ensure that a brief biodata of each author of a technical report is given to facilitate the reader's evaluation of authors' qualifications and experience in writing the report. "
  },
  {
    question: "What is the primary element in writing acknowledgements?",
    options: [
      "Financial compensation.",
      "Legal obligation.",
      "Simple courtesy.",
      "A detailed description of the help received."
    ],
    correct: 2,
    explanation: "The important element in acknowledgements is simple courtesy. "
  }
],
'Chapter 3: Applications in Technical Writing - Letters': [
  {
    question: "What type of correspondence are letters primarily used for in a corporate environment?",
    options: [
      "Internal correspondence between employees.",
      "External correspondence to vendors, clients, and potential employees.",
      "Informal chats between colleagues.",
      "Posting company announcements on a bulletin board."
    ],
    correct: 1,
    explanation: "Corporate environment will send letters (external correspondence) to and receive letters from potential employees, vendors, clients, lawyers, colleagues in other companies, and city, state, national, and international governments. "
  },
  {
    question: "Which of the following is NOT one of the eight essential components of a business letter?",
    options: [
      "Writer's address",
      "Reader's address",
      "A subject line",
      "Signature"
    ],
    correct: 2,
    explanation: "A letter should have the following eight Essential Components: Writer's address, Date, Reader's address, Salutation, Text, Complimentary close, Signature, Typed name.  A subject line is characteristic of a memo, not a letter."
  },
  {
    question: "Which of the following is a key principle for writing effective technical letters?",
    options: [
      "Using complex language and jargon to show expertise.",
      "Presenting information with personal opinions and biases.",
      "Using simple language and avoiding jargon for clarity and conciseness.",
      "Avoiding visual aids like graphs or charts."
    ],
    correct: 2,
    explanation: "Clarity and conciseness: Use simple language and avoid jargon. "
  },
  {
    question: "What is the purpose of an 'Inquiry Letter'?",
    options: [
      "To complain about a faulty product.",
      "To apply for a job.",
      "To ask for something from the recipient, like information.",
      "To follow up after an interview."
    ],
    correct: 2,
    explanation: "Inquiry letters are written for the purpose of asking for something from the recipient. "
  },
  {
    question: "What should you do before sending an inquiry letter?",
    options: [
      "Call the recipient to let them know the letter is coming.",
      "Be certain that the information is not available through other means, such as the company website.",
      "Write a very long and detailed request.",
      "Send the same letter to multiple people in the same company."
    ],
    correct: 1,
    explanation: "Before sending your inquiry, you should be certain that the information is not available through other means, such as the company website. "
  },
  {
    question: "A letter written to obtain information about a product or service is what type of inquiry?",
    options: [
      "Status inquiry",
      "Routine inquiry",
      "Sales-related inquiry",
      "Follow-up inquiry"
    ],
    correct: 2,
    explanation: "Sales-related inquiries: are written to a company or individual to obtain information about a product or service and may be the first step of collecting information for a report. "
  },
  {
    question: "What is the purpose of the introduction in an inquiry letter?",
    options: [
      "To ask all of your questions.",
      "To thank the recipient in advance.",
      "To provide your contact information.",
      "To provide the basic information of who, what, and why."
    ],
    correct: 3,
    explanation: "A. Introduction: The purpose of the introduction is to provide your audience with the basic information of who, what, and why. "
  },
  {
    question: "A job application letter is also known as a:",
    options: [
      "Resume",
      "Cover letter",
      "Letter of inquiry",
      "Adjustment letter"
    ],
    correct: 1,
    explanation: "A job application letter, also known as a cover letter, should be sent or uploaded with your resume when applying for jobs. "
  },
  {
    question: "What is the primary purpose of a job application letter?",
    options: [
      "To provide a complete history of your work experience.",
      "To explain why you are qualified for the position and should be selected for an interview.",
      "To ask for information about the company.",
      "To complain about a past experience."
    ],
    correct: 1,
    explanation: "While your resume offers a history of your work experience and an outline of your skills and accomplishments, the job application letter you send to an employer explains why you are qualified for the position and should be selected for an interview. "
  },
  {
    question: "Why is it important to write a follow-up letter after a job interview?",
    options: [
      "It is a legal requirement.",
      "It demonstrates professionalism and attention to detail.",
      "It allows you to ask for a higher salary.",
      "It is only necessary if you think the interview went poorly."
    ],
    correct: 1,
    explanation: "If you have had a job interview, the follow-up letter thanking the interviewer for his/her time is especially important for demonstrating your professionalism and attention to detail. "
  },
  {
    question: "Sending a follow-up letter after an interview allows you to do what?",
    options: [
      "Criticize the interviewer's questions.",
      "Reiterate why you believe you are the ideal fit for the job.",
      "Withdraw your application.",
      "Demand an immediate hiring decision."
    ],
    correct: 1,
    explanation: "It also allows you to mention anything you forgot to say during your interview and reiterate why you believe you are the ideal fit for the job. "
  },
  {
    question: "What is an 'Adjustment Letter' written in response to?",
    options: [
      "A job offer.",
      "A request for information.",
      "A complaint about a product or service.",
      "An invitation to an event."
    ],
    correct: 2,
    explanation: "A letter of adjustment is a letter that is written in response to someone who has complained about a product or service that you have sold to them. "
  },
  {
    question: "What is the main goal of an adjustment letter?",
    options: [
      "To blame the customer for the problem.",
      "To ignore the complaint completely.",
      "To offer reparation for your actions and a short explanation.",
      "To promote other products."
    ],
    correct: 2,
    explanation: "Its main goal is to offer reparation for your actions (if warranted) and offer a short explanation for your actions. "
  },
  {
    question: "In the first paragraph of an adjustment letter, what should you do immediately after the salutation?",
    options: [
      "Describe what the client must do.",
      "Offer a concession.",
      "Introduce yourself and immediately follow with an apology or a regret statement.",
      "Point out steps to prevent reoccurrence."
    ],
    correct: 2,
    explanation: "After the salutation, introduce yourself and immediately follow with an apology or a regret statement. "
  },
  {
    question: "When describing the error in an adjustment letter, which pronoun should be used?",
    options: [
      "'I', to take personal responsibility.",
      "'You', to refer to the customer.",
      "'They', to refer to another department.",
      "'We', because the client has a relationship with the company."
    ],
    correct: 3,
    explanation: "Describe the error using the pronoun 'we.' Remember, the client has a relationship with the company, not the individuals in it. "
  },
  {
    question: "Which of the following words should be avoided in an adjustment letter?",
    options: [
      "Apology",
      "Regret",
      "Concession",
      "Faulty"
    ],
    correct: 3,
    explanation: "After you acknowledge the problem, do not repeat it. Avoid using words like 'faulty,' 'error,' 'negligence,' etc. "
  },
  {
    question: "What should be included in the second paragraph of an adjustment letter?",
    options: [
      "Only an apology for the mistake.",
      "A description of what must be done by the client and by the company.",
      "Goodwill statements to end the letter.",
      "An introduction of yourself and the company."
    ],
    correct: 1,
    explanation: "Paragraph two: Specifically describe what must be done by the client and by the company. "
  },
  {
    question: "What is the purpose of the conclusion in an inquiry letter?",
    options: [
      "To ask the main question.",
      "To introduce yourself.",
      "To establish goodwill and express gratitude.",
      "To list the product specifications."
    ],
    correct: 2,
    explanation: "C. Conclusion: The conclusion functions to establish goodwill and express gratitude. "
  },
  {
    question: "True or False: A job application letter should simply repeat all the information from your resume.",
    options: [
      "True",
      "False"
    ],
    correct: 1,
    explanation: "While your resume offers a history of your work experience and an outline of your skills and accomplishments, the job application letter you send to an employer explains why you are qualified for the position and should be selected for an interview.  It explains and highlights, rather than just repeating."
  },
  {
    question: "What should be the maximum length of most business letters?",
    options: [
      "Three pages",
      "Two pages",
      "One page",
      "There is no length limit."
    ],
    correct: 2,
    explanation: "Letters, which rarely should exceed one page, are a basic form of technical writing. "
  }
],
'Chapter 4: Memos and Emails': [
  {
    question: "What is the primary audience for a memo?",
    options: [
      "External clients and vendors.",
      "The general public.",
      "Internal employees within the same company.",
      "Government agencies."
    ],
    correct: 2,
    explanation: "Memos are internal correspondence, written by employees in a company to employees in the same company. "
  },
  {
    question: "How do memos differ from letters in terms of format?",
    options: [
      "Memos have eight essential components, while letters have identification lines.",
      "Memos have identification lines (Date, To, From, Subject), while letters have eight essential components.",
      "Memos and letters have the exact same format.",
      "Memos are always handwritten, while letters are typed."
    ],
    correct: 1,
    explanation: "Memos have a different format than the letter essential components. Memos replace the eight letter essential components with the following memo identification lines: Date, To, From, Subject. "
  },
  {
    question: "How is a memo 'signed' compared to a letter?",
    options: [
      "The writer's full signature is placed at the bottom.",
      "Memos are not signed or initialed.",
      "The writer's initials are placed next to the 'From' line.",
      "The writer's typed name is sufficient."
    ],
    correct: 2,
    explanation: "Whereas letters are signed (essential component #7), memos are initialed next to the From line. "
  },
  {
    question: "What two elements should a good memo subject line provide?",
    options: [
      "A date and a time.",
      "A greeting and a closing.",
      "A topic and a focus.",
      "A problem and a question."
    ],
    correct: 2,
    explanation: "A good subject provides both a topic and a focus. "
  },
  {
    question: "In the subject line 'VACATION SCHEDULE FOR ACCOUNTANTS', what is the focus?",
    options: [
      "Accountants",
      "Schedule",
      "Vacation Schedule",
      "Vacation"
    ],
    correct: 2,
    explanation: "For example, a successful subject line would read as follows: Subject: VACATION SCHEDULE FOR ACCOUNTANTS. Accountants is the topic of the memo; vacation schedule is the focus. "
  },
  {
    question: "According to the sample memo, what is the cause of odd spacing in emails?",
    options: [
      "Typing in all capital letters.",
      "Using too many punctuation marks.",
      "The different sizes of monitors and the use of word wrap.",
      "Sending emails that are too long."
    ],
    correct: 2,
    explanation: "This odd spacing is caused by the different sizes of monitors. We commonly use word wrap when writing memos and letters...Such is not the case with e-mail. To avoid the problem of odd spacing caused by different monitor sizes, do not use word wrap. "
  },
  {
    question: "To avoid the problem of 'endless scrolling' in an email, what is the recommended length?",
    options: [
      "Approximately 50 lines (three screens).",
      "Approximately 14 lines (one screen).",
      "As long as a standard letter.",
      "There is no recommended length."
    ],
    correct: 1,
    explanation: "To avoid this problem, limit your e-mail to approximately 14 lines (one screen). "
  },
  {
    question: "Which statement is true about the use of email in a business context?",
    options: [
      "Email can only be used for internal communication.",
      "Email can be used for both internal and external communication.",
      "Email is only for external communication.",
      "Email has been completely replaced by memos."
    ],
    correct: 1,
    explanation: "E-mail (electronic mail), in contrast, can be both internal and/or external. Employees can e-mail each other within a company and/or e-mail vendors, clients, and colleagues outside a company. "
  },
  {
    question: "What is a key benefit of using email for communication?",
    options: [
      "It guarantees that the recipient will read the message immediately.",
      "It allows a writer to instantly communicate with a reader and can be sent to numerous readers at the same time.",
      "It eliminates the need for clear subject lines.",
      "It is more formal than a printed letter."
    ],
    correct: 1,
    explanation: "E-mail allows a writer to instantly communicate with a reader. E-mail can be sent to numerous readers at the same time. "
  },
  {
    question: "Why is it important to use a professional email address?",
    options: [
      "It is easier to remember.",
      "It makes you seem more approachable and casual.",
      "Hiring managers are more likely to open and consider emails from professional addresses.",
      "It allows you to use more emojis in your communication."
    ],
    correct: 2,
    explanation: "Imagine that you are a hiring manager... Which email are you more likely to open and read and which person would you consider hiring? Obviously the second person [with the professional address]. "
  },
  {
    question: "What is the purpose of the 'Call To Action' (CTA) in an email?",
    options: [
      "To provide background information.",
      "To greet the recipient.",
      "To clearly mention the action expected from the recipient.",
      "To end the email with a professional signature."
    ],
    correct: 2,
    explanation: "In any case, mention the action expected from the recipient clearly in the email. "
  },
  {
    question: "What information should be included in a professional email signature for a first-time contact?",
    options: [
      "Just your first name.",
      "Your full name, role, and the company or brand you are associated with.",
      "A link to your personal social media profile.",
      "A famous quote."
    ],
    correct: 1,
    explanation: "When you are emailing someone for the first time, use an email signature that specifies your full name, your role, and the company or brand you are associated with. "
  },
  {
    question: "What is the difference between CC and BCC in an email?",
    options: [
      "CC is for the main recipient, BCC is for secondary recipients.",
      "There is no difference.",
      "In CC, all recipients can see who else was copied; in BCC, recipients are hidden from each other.",
      "BCC is for sending to large groups, and CC is for small groups."
    ],
    correct: 2,
    explanation: "CC stands for Carbon Copy. It means that all recipients can see who else has been copied on the email. BCC stands for Blind Carbon Copy. It means that recipients added in the BCC field are hidden from other recipients. "
  },
  {
    question: "When is it appropriate to use BCC?",
    options: [
      "When you want everyone to see who the email was sent to.",
      "For keeping people in the loop on an ongoing thread.",
      "When you want to send an email to a large group without revealing their email addresses.",
      "You should never use BCC in a professional setting."
    ],
    correct: 2,
    explanation: "When to use BCC: When you want to send an email to a large group of people without revealing their email addresses. "
  },
  {
    question: "What is a benefit of scheduling an email to be sent later?",
    options: [
      "It ensures the email is shorter.",
      "It allows the email to reach the recipient during their peak work hours, enhancing the chance of a response.",
      "It automatically checks for spelling errors.",
      "It bypasses the recipient's spam filter."
    ],
    correct: 1,
    explanation: "Hence scheduling an email, to reach the recipient during their peak work hours enhances the chance of them responding immediately. "
  },
  {
    question: "What tone does typing in all capital letters create in an email?",
    options: [
      "A professional and serious tone.",
      "A friendly and casual tone.",
      "A negative tone, called flaming, as if you are shouting.",
      "An enthusiastic and excited tone."
    ],
    correct: 2,
    explanation: "Improving Tone-Studies tell us that typing in all caps creates a negative tone, called flaming. For example, when one writes, TELL YOUR SUBORDINATES TO IMPROVE THEIR TONE IN E-MAIL, readers feel they are being shouted at. "
  },
  {
    question: "True or False: A successful email contains a subject line with a topic and a focus, an introduction, a body, and a conclusion.",
    options: [
      "True",
      "False"
    ],
    correct: 0,
    explanation: "A successful e-mail contains a subject line with a topic and a focus, an introduction, a body, and a conclusion. "
  },
  {
    question: "Which of the following is considered a common email mistake?",
    options: [
      "Using a clear and specific subject line.",
      "Using a professional email address.",
      "Using 'Reply All' unnecessarily.",
      "Proofreading for grammar and spelling errors."
    ],
    correct: 2,
    explanation: "One of the common email mistakes is using 'Reply All' unnecessarily. "
  },
  {
    question: "If you are emailing someone you met at an event for the first time, what should you do?",
    options: [
      "Assume they remember you and get straight to the point.",
      "Introduce yourself and state the background, mentioning the event name.",
      "Wait for them to email you first.",
      "Use a very generic greeting and purpose."
    ],
    correct: 1,
    explanation: "If you are emailing someone for the first time, introduce yourself, and state the background of the email. For example, when you are emailing someone you met at an event...be sure to mention the event name. "
  },
  {
    question: "What should you do if your email content is very long?",
    options: [
      "Send it all at once to be efficient.",
      "Use a very small font to make it fit on one screen.",
      "Communicate the main items first and save the rest for later, as long emails might be skipped.",
      "Convert the long email into a memo instead."
    ],
    correct: 2,
    explanation: "If you have a lot to say, it would be better to communicate the main and important items in the first email and save the rest for later. Too long emails might be skipped and you might not get the much-needed response from the other person. "
  }
],
'Chapter 5: Resumes': [
  {
    question: "Which of the following is a recommended method for finding job opportunities?",
    options: [
      "Waiting for companies to contact you directly.",
      "Only applying to jobs listed in newspapers.",
      "Networking, career placement centers, and online searches.",
      "Exclusively using one single job website."
    ],
    correct: 2,
    explanation: "Where should students look for jobs? They should try the following: 1-Networking... 2-Career placement centers... 3.Online searches. "
  },
  {
    question: "What is the main purpose of a resume?",
    options: [
      "To serve as a legal contract for employment.",
      "To allow applicants to describe their experience and skills in their own words.",
      "To provide a detailed narrative of the applicant's life story.",
      "To be a place for applicants to list their hobbies and interests exclusively."
    ],
    correct: 1,
    explanation: "Resumes allow applicants the opportunity to describe their experience and skills in their own words. "
  },
  {
    question: "Which type of resume emphasizes your work experience and lists it in reverse order?",
    options: [
      "Functional resume",
      "Combination resume",
      "Reverse Chronological resume",
      "Skills-based resume"
    ],
    correct: 2,
    explanation: "Reverse Chronological resumé...has a classic resume layout, emphasizing your work experience and professional accomplishments. It lists your work history in reverse order, from the most current going backward. "
  },
  {
    question: "A functional resume would be most suitable for whom?",
    options: [
      "A recent college graduate with a lot of relevant work experience.",
      "An older individual who is changing careers.",
      "Someone who wants to highlight their steady career growth.",
      "Students applying for their first job."
    ],
    correct: 1,
    explanation: "Functional resumés are more common for older individuals who are changing jobs or career fields. "
  },
  {
    question: "A combination resume is a hybrid of which two resume types?",
    options: [
      "Creative and Technical",
      "Chronological and Functional",
      "Online and Printed",
      "Student and Professional"
    ],
    correct: 1,
    explanation: "Combination resume a hybrid of the two above [Reverse Chronological and Functional]. It highlights your experience and skill set. "
  },
  {
    question: "What is a resume summary?",
    options: [
      "A long paragraph detailing every job you've ever had.",
      "A 2-3 sentence paragraph that gives a gist of your relevant experience and accomplishments.",
      "A statement about your career goals and what you want from the company.",
      "A list of your hobbies and interests."
    ],
    correct: 1,
    explanation: "A resume summary is a 2-3 sentence paragraph that gives recruiters a gist of your relevant experience and boasts about your accomplishments in the field. "
  },
  {
    question: "When should you choose to use a resume objective instead of a summary?",
    options: [
      "When you have many years of relevant experience.",
      "When you have no work experience or are changing careers.",
      "When the job description specifically asks for a summary.",
      "You should always use both a summary and an objective."
    ],
    correct: 1,
    explanation: "Choose the resume objective statement if you have no work experience or at least none related to the position you're applying for (entry-level applicants, career changers, students, etc.). "
  },
  {
    question: "What is meant by 'tailoring' your resume?",
    options: [
      "Using a standard, generic resume for all job applications.",
      "Making the resume as long as possible.",
      "Making it relevant to the job description by including keywords from the job ad.",
      "Changing the font and color scheme for every application."
    ],
    correct: 2,
    explanation: "To tailor a resume means to make it as relevant to the job description as possible by including keywords taken out of a job ad and scattering them throughout the resume. "
  },
  {
    question: "Why is tailoring a resume important for Applicant Tracking Systems (ATS)?",
    options: [
      "ATS prefers resumes with creative formatting.",
      "The more relevant keywords from the job ad, the higher the score the ATS assigns to your application.",
      "ATS automatically rejects resumes that have been tailored.",
      "ATS does not scan for keywords."
    ],
    correct: 1,
    explanation: "You can include the keywords that an ATS will scan and assign you a score. The more relevant keywords, the higher the score you get. That leads to getting your application seen by a recruiter. "
  },
  {
    question: "How should you list your education on a resume if you have a university degree?",
    options: [
      "List your high school first, then your university degree.",
      "Only list your high school information.",
      "Place your highest degree first and leave out the high school info.",
      "List every school you have ever attended in chronological order."
    ],
    correct: 2,
    explanation: "Degree: Place your highest degree first. That means leaving out the high school info if you finished a university or college. "
  },
  {
    question: "What is the difference between skills and experience?",
    options: [
      "They are the same thing.",
      "Skills are knowledge from work history, while experience is abilities.",
      "Skills are the abilities a candidate has, while experience is the knowledge acquired through work history.",
      "Only experience should be listed on a resume, not skills."
    ],
    correct: 2,
    explanation: "Skills are the abilities that candidates bring to the table... Experience, on the other hand, is the knowledge that candidates have acquired through their work history. "
  },
  {
    question: "Which of the following is an example of an 'Additional Resume Section'?",
    options: [
      "Contact Information",
      "Work Experience",
      "Education",
      "Certifications and Awards"
    ],
    correct: 3,
    explanation: "Include Additional Resume Sections [such as] Hobbies & Interests, Volunteer Work, Internship Experience, Certifications and Awards, Languages, Projects. "
  },
  {
    question: "What document should complement your resume?",
    options: [
      "A second resume",
      "A cover letter",
      "A letter of recommendation",
      "A transcript"
    ],
    correct: 1,
    explanation: "Complement Your Resume With a Cover Letter. "
  },
  {
    question: "What is the final step before sending your resume?",
    options: [
      "Add more keywords, even if they are not relevant.",
      "Post it on social media.",
      "Double-check and proofread it for any spelling or grammar mistakes.",
      "Delete the contact information section."
    ],
    correct: 2,
    explanation: "By double-checking your resume before sending it out...scan your entire application with a tool like Grammarly to check for spelling or grammar mistakes. "
  },
  {
    question: "When listing work experience, what is often overlooked but super important to include?",
    options: [
      "Your manager's name.",
      "A list of basic, everyday duties.",
      "Key achievements that show how well you performed your duties.",
      "The company's address."
    ],
    correct: 2,
    explanation: "Key achievements: Often overlooked but super important. Employers know what you did. They need to know how well you did them. "
  },
  {
    question: "What tense should be used when describing your current job duties?",
    options: [
      "Past tense",
      "Future tense",
      "Present tense",
      "It does not matter."
    ],
    correct: 2,
    explanation: "Use present tense to describe current job and past tense to discuss previous experience. "
  },
  {
    question: "In a resume summary or objective, which of the following should be avoided?",
    options: [
      "Mentioning your skills and achievements.",
      "Mentioning the company by name.",
      "Focusing on everyday duties instead of accomplishments.",
      "Using numbers to quantify achievements."
    ],
    correct: 2,
    explanation: "The WRONG example focuses on everyday duties, whereas RIGHT shows graphic design skills, achievements, and experience. "
  },
  {
    question: "A skills-based resume is another name for which resume type?",
    options: [
      "Reverse Chronological",
      "Functional",
      "Combination",
      "Academic"
    ],
    correct: 1,
    explanation: "Functional resumés...Emphasizes your skills and qualities, hence the secondary name, skills-based resume. "
  },
  {
    question: "Which of the following is an example of a 'soft skill' that can be included on a resume?",
    options: [
      "Programming in Python",
      "Operating a forklift",
      "Communication skills",
      "Data analysis"
    ],
    correct: 2,
    explanation: "Communication skills: These can consist of people skills, non-verbal communication, active listening skills, and interpersonal skills. "
  },
  {
    question: "True or False: The 'Objectives' section is always a required component of a modern resume.",
    options: [
      "True",
      "False"
    ],
    correct: 1,
    explanation: "Objectives: This is optional: telling what kind of employment the applicant is seeking. "
  }
],
'Chapter 6: Technical Proposal': [
  {
    question: "What is the primary purpose of a project proposal in technical writing?",
    options: [
      "To provide a final report on a completed project.",
      "To be a persuasive document to convince a reader to approve a project.",
      "To be an informal contract with no real standing.",
      "To list the problems with a current system without offering solutions."
    ],
    correct: 1,
    explanation: "In technical writing, a proposal is a persuasive document that aims to convince the reader to approve a project, implement a plan, or authorize a course of action. "
  },
  {
    question: "A proposal written for a technical writing class should identify and define what?",
    options: [
      "The author's qualifications only.",
      "The budget and timeline only.",
      "The problem that needs to be solved or the opportunity that can be taken advantage of.",
      "The history of the company."
    ],
    correct: 2,
    explanation: "Proposals written as an assignment in a Technical Writing classes generally do the following: 1. Identify and define the problem that needs to be solved or the opportunity that can be taken advantage of. "
  },
  {
    question: "What should a proposal emphasize to be persuasive?",
    options: [
      "The complexity of the problem.",
      "Results, benefits, and feasibility of the proposed idea.",
      "The author's personal opinions.",
      "The constraints and difficulties."
    ],
    correct: 1,
    explanation: "Emphasize results, benefits, and feasibility of your proposed idea. "
  },
  {
    question: "Which of these is NOT a standard component of a formal proposal?",
    options: [
      "Title Page",
      "Abstract",
      "A personal diary of the project's progress",
      "Table of Contents"
    ],
    correct: 2,
    explanation: "A well-structured proposal typically includes: Title Page, Abstract, Table of Contents, Introduction, Literature Review (or Background), Procedure, References, Appendices. "
  },
  {
    question: "What is the purpose of the abstract in a project proposal?",
    options: [
      "To provide a very long and detailed summary of the entire proposal.",
      "To be a brief statement of the topic, procedure, and projected outcome.",
      "To list the table of contents.",
      "To thank the faculty advisor."
    ],
    correct: 1,
    explanation: "The abstract should be a brief statement of the topic, procedure, and the projected outcome of the project, in three or four sentences. "
  },
  {
    question: "Which section of the proposal tells the reader what your project is about and why it is worth doing?",
    options: [
      "Procedure",
      "Literature Review",
      "Introduction",
      "Budget"
    ],
    correct: 2,
    explanation: "The 'Introduction' tells the reader 1) what your project is about, 2) why the project is worth doing... "
  },
  {
    question: "What is the purpose of the 'Literature Review' or 'Background' section?",
    options: [
      "To propose a new methodology.",
      "To show that you know the background and context of your topic.",
      "To present the budget for the project.",
      "To conclude the proposal with a final pitch."
    ],
    correct: 1,
    explanation: "To show your advisor that you know what your talking about concerning your project, you need to demonstrate that you know the background and context of your topic. "
  },
  {
    question: "Which section is considered the 'heart of the proposal'?",
    options: [
      "Title Page",
      "Abstract",
      "Procedure / Methodology",
      "References"
    ],
    correct: 2,
    explanation: "The procedure or the methodology is the heart of the proposal because it must tell the reader how you propose to carry out your project. "
  },
  {
    question: "What must the 'Procedure' section convince the reader of?",
    options: [
      "That the project will be very expensive.",
      "That you clearly understand your task, have a logical time plan, and have identified all needed resources.",
      "That you have read many books on the topic.",
      "That the problem is unsolvable."
    ],
    correct: 1,
    explanation: "It must convince your advisor (or in industry your manager or potential client) that you clearly understand your task, have a logical time plan for solving your problems, and have identified all the resources you need. "
  },
  {
    question: "What kind of material is placed in the 'Appendices' section?",
    options: [
      "The introduction and conclusion.",
      "Materials too lengthy for inclusion in the text, or not directly relevant, such as raw data.",
      "The abstract and table of contents.",
      "The main argument of the proposal."
    ],
    correct: 1,
    explanation: "Appendices (singular, appendix) contain materials too lengthy for inclusion in the text, or not directly relevant. Certain kinds of raw data, background materials, and the like go here. "
  },
  {
    question: "What is an 'Executive Summary' in the context of a report?",
    options: [
      "Another name for the abstract.",
      "A section that provides a succinct overview of each section of the entire document in five to ten pages.",
      "A letter to the executive team.",
      "A list of all executives in the company."
    ],
    correct: 1,
    explanation: "This section, which comes after the abstract, provides a succinct overview of each section of the entire document in five to ten pages. Executive summaries are required in professional reports. "
  },
  {
    question: "When is a 'Letter of Transmittal' normally used?",
    options: [
      "In every proposal, regardless of the recipient.",
      "When the proposal or report is being submitted to an off-campus liaison.",
      "It is placed at the very end of the document.",
      "It replaces the introduction."
    ],
    correct: 1,
    explanation: "A Letter of Transmittal is normally affixed before the title page if the proposal or report is being submitted to an off-campus liaison. "
  },
  {
    question: "What should be included in the 'Timeline and Budget' section of a proposal?",
    options: [
      "A vague idea of the project duration.",
      "Only the total cost of the project.",
      "A detailed timeline for completion and an itemized budget.",
      "A discussion of past projects' budgets."
    ],
    correct: 2,
    explanation: "Provide a detailed timeline for completion of project... Provide an itemized budget for completing the proposed project. "
  },
  {
    question: "According to the three-sentence abstract structure, what should the first sentence do?",
    options: [
      "Indicate the anticipated conclusions.",
      "Indicate what material will be examined.",
      "Introduce the project topic.",
      "State the budget."
    ],
    correct: 2,
    explanation: "First sentence introduces the project topic, mentioning (if relevant) the off-campus agency with whom the project is being done. "
  },
  {
    question: "What is the value of a bibliography in a report?",
    options: [
      "It is only useful for the author.",
      "Its value as a list of relevant materials often makes it useful to consult independent of the report itself.",
      "It serves to make the report longer.",
      "It is where footnotes are explained in detail."
    ],
    correct: 1,
    explanation: "The bibliography lists all materials cited in notes. Its value as a list of relevant materials often makes it useful to consult independent of the report itself. "
  },
  {
    question: "A proposal must show that you clearly understand the problem to achieve what?",
    options: [
      "To show how difficult the project will be.",
      "To convince the reader that you can solve it.",
      "To get a bigger budget.",
      "To extend the project deadline."
    ],
    correct: 1,
    explanation: "You must show that you clearly understand the problem/situation if you are to convince the reader that you can solve it. "
  },
  {
    question: "When describing your proposed solution, it is best to do what?",
    options: [
      "Keep the description very general and brief.",
      "Only describe the sub-sections without an overview.",
      "Give a general overview and then break it down into more detailed sub-sections.",
      "Focus only on the obstacles."
    ],
    correct: 2,
    explanation: "Often, it is best to give a general overview of your idea, and then break it down into more detailed sub-sections. "
  },
  {
    question: "True or False: All material in the appendices must be referred to in the main text.",
    options: [
      "True",
      "False"
    ],
    correct: 0,
    explanation: "ALL material in appendices must be referred to in the text so readers know why they are here. "
  },
  {
    question: "What is a key question the 'Procedure' section is expected to answer?",
    options: [
      "Why is the project worth doing?",
      "What kinds of research have been done before?",
      "What data are needed for the project and how will they be collected?",
      "Why is your project a good topic for a degree requirement?"
    ],
    correct: 2,
    explanation: "Some of the other questions the reader will expect you to answer in this section are: ...What data are needed for the project and how will they be collected? "
  },
  {
    question: "What is the purpose of the conclusion of a proposal?",
    options: [
      "To introduce new problems.",
      "To list the references.",
      "To provide the budget details.",
      "It is the last chance to convince the reader and should be persuasive."
    ],
    correct: 3,
    explanation: "Conclusion: This is your last chance to convince the reader; be persuasive! "
  }
],
  'final exam 2023-2024' : [
  {
    "questionNumber": 1,
    "question": "A document may also have one audience (the primary reader) or multiple audiences (the secondary readers).",
    "options": ["True", "False"],
    "correct": 0,
    "explanation": "The source states, 'A document may also have one audience (the primary reader) or multiple audiences (the secondary readers)'."
  },
  {
    "questionNumber": 2,
    "question": "Term of reference is one of the components of the end matter in the technical report.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "'Terms of Reference' is listed under 'Preliminary Matter', not 'End Matter'."
  },
  {
    "questionNumber": 3,
    "question": "The title page of technical writing reports shouldn't carry the month and year of the report.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "The lecture states that the title page 'should also carry the month and year of the report'."
  },
  {
    "questionNumber": 4,
    "question": "Components of the technical writing reports are fixed in all the types.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "Reports vary by type, length, and purpose, meaning not all components are present in every type. For instance, an informal report may lack many components of a formal one."
  },
  {
    "questionNumber": 5,
    "question": "A user manual is a document provided to a user that helps in using a particular system, product, or service seamlessly.",
    "options": ["True", "False"],
    "correct": 0,
    "explanation": "This aligns with the definition of technical writing that provides instructions. 'Instruction manuals' are listed as a key example of technical writing."
  },
  {
    "questionNumber": 6,
    "question": "A memo usually contains step-by-step instructions guiding users through how to use your product and potential troubleshooting in case something goes wrong.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "This description fits an 'instruction manual', not a memo. A memo is a brief, internal form of correspondence."
  },
  {
    "questionNumber": 7,
    "question": "It's helpful to review information about resumes and learn what to include in a resume to make yours as effective as possible. One of the aspects of preparing the presentation is to know your audience and content.",
    "options": ["True", "False"],
    "correct": 0,
    "explanation": "Knowing your audience is a cornerstone of technical communication, which applies to presentations. The first part of the statement, while true, seems mismatched, but the core idea about audience and presentation is correct."
  },
  {
    "questionNumber": 8,
    "question": "All resume types contain the same structure.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "The lecture outlines three different types of resumes (Reverse Chronological, Functional, Combination), each with a distinct structure and emphasis."
  },
  {
    "questionNumber": 9,
    "question": "Reverse Chronological resumes are more common for older individuals who are changing jobs or career fields.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "Functional resumés are more common for this demographic, not Reverse-chronological resumes."
  },
  {
    "questionNumber": 10,
    "question": "The 'V's' in presentation meaning stands for planning, purpose, and process.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "This information is not present in the provided PDF files."
  },
  {
    "questionNumber": 11,
    "question": "To prepare enough material for your presentation you should consider about 65% of the allowed time.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "This specific time allocation percentage is not mentioned in the provided PDF files."
  },
  {
    "questionNumber": 12,
    "question": "One of the PowerPoint Criteria is to use red or green colors for the text.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "No specific criteria regarding the use of red or green text in PowerPoint are mentioned in the provided files."
  },
  {
    "questionNumber": 13,
    "question": "It is preferable to use graphics instead of details in the PowerPoint presentation.",
    "options": ["True", "False"],
    "correct": 0,
    "explanation": "Technical writing uses visual elements, such as charts and graphs, to clarify written concepts, a principle that applies to presentations for better understanding."
  },
  {
    "questionNumber": 15,
    "question": "In the 3 V's of Communication, visuals have the highest percentage of importance.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "The '3 V's of Communication' are not discussed in the provided PDF files, so this claim cannot be verified."
  },
  {
    "questionNumber": 16,
    "question": "User guides usually are shorter and more-focused documents than the user manuals.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "The statement is contradictory and illogical. User guides and user manuals are often used interchangeably or describe documents with the same purpose."
  },
  {
    "questionNumber": 17,
    "question": "When writing a proposal, you can skip the procedure or the methodology as they are optional.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "The 'Procedure/Methodology' section is described as 'the heart of the proposal' and is essential for convincing the reader."
  },
  {
    "questionNumber": 18,
    "question": "In the title page of a proposal should contain, title of the project, and name(s) of the author(s). The abstract of the proposal should be detailed about the topic.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "The title page and abstract are separate sections. The abstract should be a brief statement, not detailed."
  },
  {
    "questionNumber": 19,
    "question": "The abstract of the proposal should be detailed about the topic.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "The abstract should be a 'brief statement of the topic, procedure, and the projected outcome... in three or four sentences'."
  },
  {
    "questionNumber": 20,
    "question": "References usually contain or footnotes and a bibliography.",
    "options": ["True", "False"],
    "correct": 0,
    "explanation": "References usually consist of footnotes and a bibliography."
  },
  {
    "questionNumber": 21,
    "question": "When writing the instruction in the user manual you should break the instructions down into sequential steps than the presented in order as a numbered list.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "Presenting instructions in sequential steps, often as a numbered or bulleted list, is a key feature of good technical writing for clarity and ease of use."
  },
  {
    "questionNumber": 22,
    "question": "You should tell the audience about the details of the main points during the opening of the presentation.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "A good opening provides an overview. Giving all the details upfront would be overwhelming and is poor presentation structure."
  },
  {
    "questionNumber": 23,
    "question": "One of the good skills in the presentation is to avoid eye contact.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "This contradicts standard effective presentation practices, where eye contact is crucial for engagement."
  },
  {
    "questionNumber": 24,
    "question": "The followed-up word phrase 'And - so as the result' is the same meaning as 'Thus'.",
    "options": ["True", "False"],
    "correct": 0,
    "explanation": "In general usage, both phrases are used to introduce a result or conclusion."
  },
  {
    "questionNumber": 25,
    "question": "A resume summary is a 2-3 sentence paragraph that gives recruiters a gist of your relevant experience and boasts about your accomplishments in the field.",
    "options": ["True", "False"],
    "correct": 0,
    "explanation": "This is the exact definition provided for a resume summary in the lecture."
  },
  {
    "questionNumber": 26,
    "question": "In order to create an ATS-friendly resume, we should neglect the job description and look for resume keywords related to your responsibilities.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "On the contrary, you must 'refer to the job description and look for resume keywords' to create an ATS-friendly resume."
  },
  {
    "questionNumber": 27,
    "question": "Memos replace the eight letter essential components with four components.",
    "options": ["True", "False"],
    "correct": 0,
    "explanation": "Memos replace the eight letter essential components with the memo identification lines: Date, To, From, and Subject."
  },
  {
    "questionNumber": 28,
    "question": "E-mail is similar to memos in that both use date.",
    "options": ["True", "False"],
    "correct": 0,
    "explanation": "E-mail is similar to memos in that both use identification lines, which include the date."
  },
  {
    "questionNumber": 29,
    "question": "Technical reports can be classified according to the degree of formality as alarm form, letter form, schematic form, or mixed form.",
    "options": ["True", "False"],
    "correct": 1,
    "explanation": "This is the classification according to 'Format', not 'Degree of formality'. The degree of formality is formal and informal."
  },
  {
    "questionNumber": 30,
    "question": "Field trip report, is written by an engineer, or technologist just back from a field assignment.",
    "options": ["True", "False"],
    "correct": 0,
    "explanation": "A field trip report is defined as being 'written by an engineer, agricultural specialist, or technologist just back from a field assignment'."
  }
],
};


const quizDataArabic = {
'الفصل الأول: مقدمة في الكتابة التقنية': [
  {
    "question": "ما هو الغرض الأساسي للكتابة التقنية؟",
    "options": [
      "إمتاع القارئ بقصص خيالية ولغة معبرة.",
      "نقل المعلومات حول مواضيع متخصصة للمحترفين بطريقة واضحة وفعالة.",
      "التعبير عن التجارب الشخصية والعواطف بشكل ذاتي.",
      "نقل الأخبار والأحداث الجارية بموضوعية لعامة الناس."
    ],
    "correct": 1,
    "explanation": "الكتابة التقنية هي شكل من أشكال التواصل يستخدمه المحترفون لنقل المعلومات حول مواضيع متخصصة. وهي مصممة للمستخدمين في المجالات التقنية مثل الهندسة والكيمياء وبرامج وأنظمة معلومات الكمبيوتر والمهن الطبية والروبوتات والسيارات وما إلى ذلك."
  },
  {
    "question": "أي من التالي ليس هدفًا أساسيًا للكتابة التقنية؟",
    "options": [
      "إعلام الجمهور من خلال توقع أسئلتهم والإجابة عليها.",
      "إرشاد الجمهور حول كيفية أداء مهمة ما.",
      "إقناع الجمهور باستخدام التوضيحات والحلول.",
      "إنشاء شخصيات ومؤامرات خيالية."
    ],
    "correct": 3,
    "explanation": "تم تصميم الكتابة التقنية لـ: الإعلام من خلال توقع أسئلة الجمهور والإجابة عليها؛ إرشاد الجمهور لأداء مهمة أو اتباع إجراء، وإقناع الجمهور عبر التوضيحات والتحليلات والحلول. الكتابة الإبداعية، وليس الكتابة التقنية، هي التي تتضمن شخصيات ومؤامرات خيالية."
  },
  {
    "question": "وفقًا للمحاضرة، على أي من التالي تركز الكتابة التقنية؟",
    "options": [
      "الروايات والأوصاف الشخصية.",
      "المنتجات والخدمات، بما في ذلك تصنيعها وتسويقها واستخدامها.",
      "الحجج والإقناع باستخدام الكلمات الإيحائية.",
      "القصص الإخبارية والمقالات الافتتاحية القائمة على الملاحظة الواقعية."
    ],
    "correct": 1,
    "explanation": "الكتابة التقنية هي اتصال مكتوب من أجل وحول الأعمال والصناعة، مع التركيز على المنتجات والخدمات: كيفية تصنيعها وتسويقها وإدارتها وتسليمها واستخدامها."
  },
  {
    "question": "ما هي السمة التي تميز الكتابة التقنية عن أشكال الكتابة الأخرى مثل الكتابة الإبداعية أو التعبيرية؟",
    "options": [
      "أنها ذاتية وتعتمد على التجربة الشخصية.",
      "أنها تستخدم الكلمات الإيحائية والتعبيرية.",
      "أنها موضوعية وتستخدم كلمات دلالية (denotative).",
      "أنها تركز على خلق الصور والمؤامرات الخيالية."
    ],
    "correct": 2,
    "explanation": "الكتابة التقنية موضوعية، وتُكتب عن المنتجات أو الخدمات، وتستخدم جملًا وفقرات قصيرة، وكلمات دلالية. في المقابل، تعد الكتابة الإبداعية والتعبيرية أكثر ذاتية وتستخدم كلمات إيحائية."
  },
  {
    "question": "ما هي الخطوة الأولى في عملية إنشاء تقرير تقني؟",
    "options": [
      "البحث والقراءة والاستشهاد بالمراجع.",
      "إعداد النص على الكمبيوتر.",
      "قبول المهمة وتحليلها.",
      "إجراء المراجعة النهائية."
    ],
    "correct": 2,
    "explanation": "تبدأ خطوات العمل المطلوبة لإنشاء التقارير التقنية بـ: قبول المهمة وتحليلها."
  },
  {
    "question": "عند تحليل مهمة لتقرير تقني، ما هو السؤال الحاسم الذي يجب طرحه حول الجمهور؟",
    "options": [
      "ما هي الألوان المفضلة للقراء؟",
      "من ينتمي إلى المجموعة المستهدفة؟ لمن أكتب التقرير؟",
      "كم عدد الأشخاص الذين سيقرؤون التقرير؟",
      "هل سيشارك القراء التقرير على وسائل التواصل الاجتماعي؟"
    ],
    "correct": 1,
    "explanation": "أثناء التخطيط للتقرير التقني، يجب عليك تحليل المهمة بدقة. سؤال مهم يجب طرحه هو: من ينتمي إلى المجموعة المستهدفة؟ لمن أكتب التقرير؟ يرجى تدوين الملاحظات وفقًا لذلك!"
  },
  {
    "question": "ما هي متطلبات العنوان الجيد للتقرير التقني؟",
    "options": [
      "يجب أن يكون طويلاً ومفصلاً ويتضمن العديد من الصفات.",
      "يجب أن يكون غامضًا ولا يكشف عن الموضوع الرئيسي.",
      "يجب أن يحتوي على الموضوع الرئيسي، وأن يكون قصيرًا ودقيقًا وصادقًا.",
      "يجب أن يتم إنشاؤه فقط من قبل المشرف أو العميل."
    ],
    "correct": 2,
    "explanation": "يجب أن يحتوي العنوان على الموضوع الرئيسي أو الكلمات الرئيسية للتقرير، ويجب أن يكون قصيرًا ودقيقًا وصادقًا. ويجب أن يكون له لحن كلام جيد وأن يثير الاهتمام."
  },
  {
    "question": "ما هو السبب الرئيسي لأهمية 'الجمهور' في التواصل التقني؟",
    "options": [
      "لجعل المستند أطول وأكثر تعقيدًا.",
      "لاستخدام أكبر قدر ممكن من المصطلحات التقنية.",
      "لترجمة المعلومات التقنية لغير المتخصصين لفهمها.",
      "للكتابة فقط للمتخصصين في هذا المجال."
    ],
    "correct": 2,
    "explanation": "عنصر الجمهور مهم جدًا لدرجة أنه أحد الأركان الأساسية لهذه الدورة: أنت مطالب بالكتابة عن مواضيع تقنية للغاية ولكن بطريقة يمكن للمبتدئ غير المتخصص أن يفهمها. هذه القدرة على 'ترجمة' المعلومات التقنية لغير المتخصصين هي مهارة أساسية لأي متصل تقني."
  },
  {
    "question": "ما هي المسؤولية الأخلاقية الرئيسية للكاتب التقني فيما يتعلق بالبيانات؟",
    "options": [
      "استخدام المخططات والجداول التي تحرف البيانات لدعم الاستنتاج.",
      "تجنب الإشارة إلى الخبراء للتأثير على دعم القراء.",
      "استخدام الكلمات والعبارات العاطفية لمناشدة القارئ.",
      "استخدام أرقام دقيقة للإبلاغ عن البيانات."
    ],
    "correct": 3,
    "explanation": "أيضًا، يجب على الكتاب التقنيين استخدام أرقام دقيقة للإبلاغ عن البيانات، وتجنب المخططات والجداول التي تحرف البيانات."
  },
  {
    "question": "ما هو المطلب الأخلاقي المتعلق بالمصادر في الكتابة التقنية؟",
    "options": [
      "من المقبول إعادة ترتيب المعلومات لتظهر كالمصدر الأصلي.",
      "الاستشهاد بالمصادر اختياري إذا كانت المعلومات معرفة عامة.",
      "يجب الإشارة إلى جميع المصادر بدقة في النص والاستشهاد بها في صفحة المراجع.",
      "ما عليك سوى الاستشهاد بالمصادر التي تتفق معها."
    ],
    "correct": 2,
    "explanation": "يجب الإشارة إلى جميع المصادر بدقة في النص والاستشهاد بها في صفحة المراجع."
  },
  {
    "question": "عند الكتابة للقراء من ثقافات أخرى، ما هو المقترح بخصوص المفردات؟",
    "options": [
      "استخدام مفردات واسعة ومعقدة لإظهار الخبرة.",
      "يجب أن يكون لكل كلمة معنى واحد فقط.",
      "استخدام أكبر عدد ممكن من التعابير الاصطلاحية لتبدو أكثر طبيعية.",
      "افتراض أن جميع القراء يعرفون الاختصارات الإنجليزية الشائعة."
    ],
    "correct": 1,
    "explanation": "قلل من مفرداتك. يجب أن يكون لكل كلمة معنى واحد فقط، كما هو مطلوب في اللغة الإنجليزية المبسطة وغيرها من اللغات الإنجليزية الأساسية."
  },
  {
    "question": "لماذا يجب استخدام صيغة المبني للمعلوم (active voice) عند الكتابة لجمهور متعدد الثقافات؟",
    "options": [
      "صيغة المبني للمجهول أكثر رسمية واحترامًا.",
      "صيغة المبني للمعلوم أكثر تعقيدًا وتحديًا.",
      "صيغة المبني للمعلوم أسهل للفهم لغير الناطقين باللغة الإنجليزية.",
      "صيغة المبني للمعلوم تسمح بجمل أطول وأكثر وصفية."
    ],
    "correct": 2,
    "explanation": "استخدم صيغة المبني للمعلوم كلما أمكن ذلك. صيغة المبني للمعلوم أسهل للفهم لغير الناطقين باللغة الإنجليزية من صيغة المبني للمجهول."
  },
  {
    "question": "ماذا يعني أن يكون المستند التقني 'سهل الوصول إليه' (Accessible)؟",
    "options": [
      "أن المستند مكتوب من قبل فريق من الكتاب.",
      "أن المعلومات مشروحة ومقدمة بأسلوب يسهل فهمه ومتابعته.",
      "أن المستند يستخدم فقط الكلمات التي يحتاجها.",
      "أن المستند متاح عبر الإنترنت فقط."
    ],
    "correct": 1,
    "explanation": "سهل الوصول إليه - فكر في مستخدمي مستندك... يجب شرح المعلومات وتقديمها بأسلوب يسهل فهمه ومتابعته."
  },
  {
    "question": "ماذا تعني الكتابة 'بإيجاز' (concisely) في الكتابة التقنية؟",
    "options": [
      "استخدام كلمات أقل، حتى لو كان ذلك على حساب الوضوح.",
      "استخدام كل الكلمات التي تحتاجها ولكن فقط الكلمات التي تحتاجها.",
      "كتابة مستندات قصيرة جدًا.",
      "تجنب القوائم والعناوين."
    ],
    "correct": 1,
    "explanation": "موجز - أن تكتب بإيجاز لا يعني استخدام كلمات أقل. بل يعني استخدام كل الكلمات التي تحتاجها ولكن فقط الكلمات التي تحتاجها."
  },
  {
    "question": "كيف يختلف تنظيم الكتابة التقنية عن تنظيم المقال؟",
    "options": [
      "الكتابة التقنية ليس لها مقدمة أو متن أو خاتمة.",
      "تستخدم الكتابة التقنية سطر موضوع بدلاً من أطروحة وتعدادًا نقطيًا بدلاً من الكلمات الانتقالية.",
      "تستخدم المقالات جمل الموضوع، لكن الكتابة التقنية لا تفعل ذلك أبدًا.",
      "لا يوجد فرق في التنظيم."
    ],
    "correct": 1,
    "explanation": "من حيث التنظيم، تستخدم الكتابة التقنية سطر موضوع مقابل أطروحة وتعدادًا للنقاط مقابل الكلمات الانتقالية."
  },
  {
    "question": "ما هو دور تصميم المستند في الكتابة التقنية مقارنة بالمقالات؟",
    "options": [
      "تصميم المستند ليس عاملاً في الكتابة التقنية.",
      "تستخدم المقالات تقنيات إبراز أكثر من الكتابة التقنية.",
      "تستخدم الكتابة التقنية تقنيات إبراز مثل الرسومات والعناوين والنقاط، في حين أن هذا ليس عاملاً في العادة في المقالات.",
      "كلاهما يستخدم نفس مبادئ تصميم المستندات."
    ],
    "correct": 2,
    "explanation": "تستخدم الكتابة التقنية تقنيات الإبراز، مثل الرسومات والعناوين والعناوين الفرعية والخطوط المختلفة والمساحات البيضاء والنقاط وما إلى ذلك. في المقالات، لا يكون هذا عادةً عاملاً."
  },
  {
    "question": "من يعتبر 'القارئ الأساسي' لمستند تقني؟",
    "options": [
      "شخص يقرأ فقط الأقسام التي تتعلق به.",
      "الشخص الذي أمر بكتابة التقرير أو الشخص الذي يستهدفه التقرير.",
      "أي شخص يراجع المستند.",
      "زميل من قسم مختلف."
    ],
    "correct": 1,
    "explanation": "القارئ الأساسي هو الشخص الذي أمر بكتابة التقرير أو الشخص الذي يستهدفه التقرير. هؤلاء القراء عادة ما يقرؤون التقرير بأكمله."
  },
  {
    "question": "لماذا تعتبر العناوين مهمة لـ 'القراء الثانويين'؟",
    "options": [
      "العناوين تجعل المستند يبدو أكثر جمالية.",
      "تسمح العناوين للقراء الثانويين بالوصول بسهولة إلى المعلومات المحددة التي تتعلق بهم.",
      "العناوين هي فقط لفائدة القارئ الأساسي.",
      "تزيد العناوين من إجمالي عدد كلمات المستند."
    ],
    "correct": 1,
    "explanation": "القراء الثانويون هم هؤلاء القراء الذين سيقرؤون فقط أقسام التقرير التي تتعلق بهم... هذا هو المكان الذي يكون فيه التنسيق، واستخدام العناوين، مهمًا في السماح للقارئ بالوصول السهل إلى المعلومات."
  },
  {
    "question": "ما هي أنواع الخطوط الموصى بها للعناوين والنص الأساسي في المستندات التقنية؟",
    "options": [
      "خط Serif للعناوين، وخط Sans serif للنص الأساسي.",
      "نفس الخط لكل من العناوين والنص الأساسي.",
      "خط Sans serif للعناوين، وخط Serif للنص الأساسي.",
      "أي خط مزخرف مقبول لكليهما."
    ],
    "correct": 2,
    "explanation": "العناوين: Sans serif، مثل Arial أو Calibri. النص الأساسي: خط Serif، مثل Times New Roman أو Cambria."
  },
  {
    "question": "ما هي القاعدة العامة لطول الفقرة والجملة في المستندات التقنية؟",
    "options": [
      "يجب أن تكون الفقرات 20 سطراً على الأقل، والجمل 30-40 كلمة.",
      "تميل الفقرات إلى ألا تزيد عن 10 أسطر، والجمل عادة ما تكون 15-20 كلمة.",
      "لا توجد قواعد لطول الفقرة والجملة.",
      "يجب أن تكون الفقرات والجمل طويلة قدر الإمكان لتضمين المزيد من التفاصيل."
    ],
    "correct": 1,
    "explanation": "تميل الفقرات إلى ألا تزيد عن 10 أسطر. وعادة ما تكون الجمل من 15-20 كلمة."
  }
],
'الفصل الثاني: مكونات التقرير الفني': [
  {
    "question": "أي من التالي ليس تصنيفًا للتقارير الفنية حسب المحتوى؟",
    "options": [
      "تقرير جدوى",
      "تقرير تحقيق",
      "تقرير ربع سنوي",
      "تقرير حادثة"
    ],
    "correct": 2,
    "explanation": "التقارير الفنية التي تصنف حسب المحتوى: تقرير حادثة، تقرير رحلة ميدانية، تقرير جدوى، تقرير تحقيق، تقرير تقييم. التقارير ربع السنوية تصنف حسب الدورية."
  },
  {
    "question": "ما هو الغرض من المقترح الفني؟",
    "options": [
      "وصف حدث وقع بالفعل.",
      "تقديم تقرير موجز عن توزيع الموظفين.",
      "إقناع شركة أخرى بقدرتها الفنية على تقديم خدمة أو أداء مهمة محددة.",
      "تقييم ما إذا كان المشروع ممكنًا اقتصاديًا أو فنيًا."
    ],
    "correct": 2,
    "explanation": "المقترح الفني: والذي يتم إعداده عادةً من قبل شركة لإقناع شركة أو مؤسسة أخرى بقدرتها الفنية على تقديم خدمة محددة أو أداء مهمة محددة."
  },
  {
    "question": "ينقسم التقرير الفني عادة إلى أي ثلاثة أجزاء رئيسية؟",
    "options": [
      "مقدمة، متن، خاتمة",
      "بداية، وسط، نهاية",
      "المادة التمهيدية، التقرير الرئيسي، المادة الختامية",
      "ملخص، نتائج، مراجع"
    ],
    "correct": 2,
    "explanation": "تنقسم الوحدة 2 إلى ثلاثة أجزاء - المادة التمهيدية، والتقرير الرئيسي، والمادة الختامية."
  },
  {
    "question": "أي من هذه المكونات ينتمي إلى 'المادة التمهيدية' في التقرير الفني؟",
    "options": [
      "الملخص التنفيذي",
      "التوصيات",
      "الملاحق",
      "جدول المحتويات"
    ],
    "correct": 3,
    "explanation": "تشمل المادة التمهيدية الغلاف، وصفحة العنوان، وجدول المحتويات، وخطاب الإحالة، وصلاحيات التكليف، والنطاق والقيود، والمصطلحات والرموز الفنية."
  },
  {
    "question": "ما هو الشرط الرئيسي لعنوان التقرير الفني؟",
    "options": [
      "يجب أن يكون على الأقل سطرين.",
      "يجب أن يحتوي على المواضيع الرئيسية أو الكلمات المفتاحية الرئيسية وأن يكون قصيرًا ودقيقًا.",
      "يجب أن يكون مكتوبًا بأحرف كبيرة بالكامل.",
      "يجب أن يتجنب إثارة أي اهتمام أو فضول."
    ],
    "correct": 1,
    "explanation": "متطلبات عنوان التقرير الفني: يجب أن يكون العنوان واضحًا وصحيحًا وصادقًا وقصيرًا ودقيقًا، ويجب أن يحتوي على المواضيع الرئيسية أو الكلمات المفتاحية الرئيسية (لبحث قواعد البيانات!)."
  },
  {
    "question": "ما هي وظيفة خطاب الإحالة؟",
    "options": [
      "تقديم ملخص مفصل للتقرير بأكمله.",
      "سرد جميع المصطلحات الفنية المستخدمة في التقرير.",
      "تقديم التقرير رسميًا إلى العميل الذي طلبه.",
      "مناقشة النتائج والاستنتاجات بالتفصيل."
    ],
    "correct": 2,
    "explanation": "عادة ما يرافق خطاب رسمي قصير تقريرًا مكلفًا به. في جوهره، يقول: 'هذا هو التقرير الذي طلبته مني/منا كتابته. آمل/نأمل أن تجده مفيدًا'."
  },
  {
    "question": "ما الذي يجب تضمينه في قسم 'النطاق والقيود'؟",
    "options": [
      "مناقشة للنتائج.",
      "قائمة بالمراجع.",
      "ملاحظات واضحة عن النطاق وبيان بأي قيود معروفة للتقرير.",
      "السيرة الذاتية للمؤلفين."
    ],
    "correct": 2,
    "explanation": "يجب أن تكون ملاحظات النطاق الخاصة بك واضحة ودقيقة. يجب ذكر أي قيود معروفة للتقرير بشكل مماثل وبالتالي التحفظات والاحتياطات التي يجب ممارستها عند قراءته و/أو استخدامه."
  },
  {
    "question": "أي مما يلي ينتمي إلى قسم 'التقرير الرئيسي'؟",
    "options": [
      "صفحة العنوان",
      "الملخص التنفيذي",
      "جدول المحتويات",
      "الملاحق"
    ],
    "correct": 1,
    "explanation": "يتضمن قسم التقرير الرئيسي الملخص التنفيذي، وطرق جمع البيانات، وتحليل البيانات وتفسيرها، والنتائج/الاستنتاجات، والمناقشة والاستنتاجات، والتوصيات."
  },
  {
    "question": "كيف يختلف 'الملخص التنفيذي' عن 'الملخص' (abstract)؟",
    "options": [
      "أنه أقصر من الملخص.",
      "أنه نظرة عامة شاملة إلى حد ما للتقرير، مخصصة للمدير التنفيذي المشغول.",
      "أنه يتضمن فقط التوصيات.",
      "أنه يوضع في نهاية التقرير."
    ],
    "correct": 1,
    "explanation": "هذا أكثر بكثير من مجرد 'ملخص' أو 'خلاصة' في ورقة علمية. إنه نظرة عامة شاملة إلى حد ما لما سيجده القارئ في متن التقرير. يجب أن تكتبه مع الأخذ في الاعتبار المدير التنفيذي المشغول الذي لن يكون لديه الميل أو الوقت لقراءة تقريرك بالكامل."
  },
  {
    "question": "ما هو الفرق الرئيسي بين 'النتائج' (findings) و 'النتائج' (results)؟",
    "options": [
      "لا يوجد فرق.",
      "'النتائج' (findings) من الأبحاث التجريبية، بينما 'النتائج' (results) من الملاحظات الميدانية.",
      "'النتائج' (results) هي بشكل عام نتاج البحث التجريبي، بينما تتعلق 'النتائج' (findings) عادة بالملاحظات الميدانية.",
      "'النتائج' (results) ذاتية، بينما 'النتائج' (findings) موضوعية."
    ],
    "correct": 2,
    "explanation": "بشكل عام، 'النتائج' هي حصيلة البحث التجريبي، في حين أن 'الاستنتاجات' تتعلق عادة بالملاحظات الميدانية."
  },
  {
    "question": "يجب أن تستند التوصيات في التقرير إلى ماذا؟",
    "options": [
      "آراء المؤلف الشخصية.",
      "مواد من خارج التقرير.",
      "السيرة الذاتية للمؤلفين.",
      "مواد مشتقة علميًا من داخل التقرير."
    ],
    "correct": 3,
    "explanation": "على وجه الخصوص، تذكر دائمًا أن توصياتك يجب أن تستمد علميًا من مواد داخل التقرير، وليس خارجه."
  },
  {
    "question": "أي من هذه المكونات يمكن العثور عليه في 'المادة الختامية' للتقرير؟",
    "options": [
      "الملخص التنفيذي",
      "المقدمة",
      "الملاحق",
      "طرق جمع البيانات"
    ],
    "correct": 2,
    "explanation": "تتألف 'المادة الختامية' من مواد، على الرغم من أهميتها، ليست ضرورية لفهم أو حتى تقدير تقريرك... 1. الملاحق 2. السيرة الذاتية للمؤلف (المؤلفين) 3. المراجع، والببليوغرافيا 4. الشكر والتقدير 5. قائمة التوزيع."
  },
  {
    "question": "ما نوع المعلومات التي توضع عادة في الملحق؟",
    "options": [
      "الملخص التنفيذي.",
      "الاستنتاجات الرئيسية.",
      "الإحصاءات أو الصور أو الاستبيانات التي تكون مرهقة جدًا لإدراجها في المتن الرئيسي.",
      "جدول المحتويات."
    ],
    "correct": 2,
    "explanation": "هذا هو المكان المناسب لوضع الإحصاءات والصور والاستبيانات وجداول المقابلات وغيرها من المعلومات الضرورية لتقريرك ولكنها مرهقة جدًا بحيث لا يمكن تضمينها في المتن الرئيسي دون الإخلال بسير أفكارك."
  },
  {
    "question": "ما الفرق بين قائمة 'المراجع' و 'الببليوغرافيا'؟",
    "options": [
      "الببليوغرافيا تسرد فقط المصادر المنشورة.",
      "قائمة المراجع دائمًا أطول من الببليوغرافيا.",
      "إنهما نفس الشيء.",
      "تتضمن الببليوغرافيا جميع المصادر التي تم الرجوع إليها، حتى لو لم يتم ذكرها في التقرير، بينما يتم الاستشهاد بالمراجع في التقرير."
    ],
    "correct": 3,
    "explanation": "تتضمن الببليوغرافيا جميع المصادر الوثائقية التي تم الرجوع إليها ولكن ليس بالضرورة المذكورة في المتن الرئيسي لتقريرك. ما لم يكن تقريرك أكاديميًا بشكل أساسي، فإن قائمة المراجع في التقرير ستفي بالغرض دون الحاجة إلى ببليوغرافيا."
  },
  {
    "question": "ما هو الغرض من 'تقرير المراجعة' (Audit Report)؟",
    "options": [
      "إقناع العميل بالقدرة الفنية.",
      "التعليق على كفاءة الحسابات المالية والمادية للشركة.",
      "وصف كارثة فيضان.",
      "اقتراح فكرة جديدة بعمق."
    ],
    "correct": 1,
    "explanation": "تقرير المراجعة هو تعليق قصير على درجة الكفاءة التي عملت بها الشركة في حساباتها المالية والمادية وحفظ سجلات هذه العمليات."
  },
  {
    "question": "ما هو الغرض من قسم 'صلاحيات التكليف' (Terms of Reference) في تقرير مكلف به؟",
    "options": [
      "لشكر أولئك الذين ساعدوا في التقرير.",
      "لسرد السيرة الذاتية للمؤلفين.",
      "لتمكين العملاء من تقييم التقرير وللفصل في أي نزاعات.",
      "لعرض النتائج الرئيسية للدراسة."
    ],
    "correct": 2,
    "explanation": "في حين أن القيمة الأساسية لهذا الجزء من التقرير هي تمكين العملاء من تقييم المنتج الذي تعاقدوا على دفع ثمنه، فقد يكون بمثابة أداة للتحكيم في أي نزاع بين العملاء وكاتب (كتاب) التقرير."
  },
  {
    "question": "عند سرد المصطلحات والرموز الفنية، ماذا يجب أن تدرج؟",
    "options": [
      "قائمة عامة بجميع المصطلحات في ذلك المجال من العلوم.",
      "فقط المصطلحات التي تم استخدامها في تقريرك.",
      "الرموز فقط، وليس المصطلحات.",
      "فقط المصطلحات الأكثر شيوعًا وشهرة."
    ],
    "correct": 1,
    "explanation": "يجب عليك سرد وشرح فقط تلك التي تم استخدامها في تقريرك، وليس قائمة عامة بالمصطلحات والرموز في فرع معين من العلوم."
  },
  {
    "question": "في قسم 'المناقشة والاستنتاجات'، ما هي العلاقة المتوقعة بين الجزأين؟",
    "options": [
      "يجب تقديم الاستنتاجات أولاً، ثم المناقشة.",
      "المناقشة والاستنتاجات غير مرتبطين.",
      "يجب أن تؤدي المناقشة منطقياً إلى الاستنتاجات.",
      "يجب أن يحتوي هذا القسم على استنتاجات فقط، وليس مناقشة."
    ],
    "correct": 2,
    "explanation": "يجب أن تؤدي مناقشتك منطقياً إلى استنتاجاتك للدراسة، وسيكون من الحكمة ترقيم جميع استنتاجاتك لسهولة الفهم."
  },
  {
    "question": "ما هو الغرض من إدراج السيرة الذاتية للمؤلف (المؤلفين)؟",
    "options": [
      "لزيادة عدد صفحات التقرير.",
      "لتسهيل تقييم القارئ لمؤهلات وخبرات المؤلفين.",
      "إنه مطلب قانوني إلزامي لجميع التقارير.",
      "لتوفير معلومات الاتصال للمؤلفين."
    ],
    "correct": 1,
    "explanation": "يجب عليك التأكد من إعطاء سيرة ذاتية موجزة لكل مؤلف لتقرير فني لتسهيل تقييم القارئ لمؤهلات وخبرات المؤلفين في كتابة التقرير."
  },
  {
    "question": "ما هو العنصر الأساسي في كتابة الشكر والتقدير؟",
    "options": [
      "التعويض المالي.",
      "الالتزام القانوني.",
      "المجاملة البسيطة.",
      "وصف مفصل للمساعدة التي تم تلقيها."
    ],
    "correct": 2,
    "explanation": "العنصر المهم في الشكر والتقدير هو المجاملة البسيطة."
  }
],
'الفصل الثالث: تطبيقات في الكتابة الفنية - الخطابات': [
  {
    "question": "ما هو نوع المراسلات التي تستخدم فيها الخطابات بشكل أساسي في بيئة الشركات؟",
    "options": [
      "المراسلات الداخلية بين الموظفين.",
      "المراسلات الخارجية للموردين والعملاء والموظفين المحتملين.",
      "المحادثات غير الرسمية بين الزملاء.",
      "نشر إعلانات الشركة على لوحة الإعلانات."
    ],
    "correct": 1,
    "explanation": "سترسل بيئة الشركة خطابات (مراسلات خارجية) إلى وتتلقى خطابات من الموظفين المحتملين والبائعين والعملاء والمحامين والزملاء في الشركات الأخرى وحكومات المدن والولايات والحكومات الوطنية والدولية."
  },
  {
    "question": "أي من التالي ليس أحد المكونات الأساسية الثمانية لخطاب عمل؟",
    "options": [
      "عنوان الكاتب",
      "عنوان القارئ",
      "سطر الموضوع",
      "التوقيع"
    ],
    "correct": 2,
    "explanation": "يجب أن يحتوي الخطاب على المكونات الأساسية الثمانية التالية: عنوان الكاتب، التاريخ، عنوان القارئ، التحية، النص، الخاتمة المجاملة، التوقيع، الاسم المطبوع. سطر الموضوع هو سمة مميزة للمذكرة، وليس للخطاب."
  },
  {
    "question": "أي من التالي هو مبدأ أساسي لكتابة خطابات فنية فعالة؟",
    "options": [
      "استخدام لغة معقدة ومصطلحات متخصصة لإظهار الخبرة.",
      "تقديم المعلومات مع آراء وتحيزات شخصية.",
      "استخدام لغة بسيطة وتجنب المصطلحات المتخصصة للوضوح والإيجاز.",
      "تجنب الوسائل البصرية مثل الرسوم البيانية أو المخططات."
    ],
    "correct": 2,
    "explanation": "الوضوح والإيجاز: استخدم لغة بسيطة وتجنب المصطلحات."
  },
  {
    "question": "ما هو الغرض من 'خطاب الاستفسار'؟",
    "options": [
      "للشكوى من منتج معيب.",
      "للتقدم لوظيفة.",
      "لطلب شيء من المستلم، مثل المعلومات.",
      "للمتابعة بعد مقابلة."
    ],
    "correct": 2,
    "explanation": "تُكتب خطابات الاستفسار لغرض طلب شيء ما من المستلم."
  },
  {
    "question": "ماذا يجب أن تفعل قبل إرسال خطاب استفسار؟",
    "options": [
      "الاتصال بالمستلم لإخباره بأن الرسالة قادمة.",
      "التأكد من أن المعلومات غير متاحة بوسائل أخرى، مثل موقع الشركة على الويب.",
      "كتابة طلب طويل ومفصل للغاية.",
      "إرسال نفس الرسالة إلى عدة أشخاص في نفس الشركة."
    ],
    "correct": 1,
    "explanation": "قبل إرسال استفسارك، يجب أن تكون على يقين من أن المعلومات غير متاحة من خلال وسائل أخرى، مثل موقع الشركة."
  },
  {
    "question": "الخطاب المكتوب للحصول على معلومات حول منتج أو خدمة هو أي نوع من الاستفسارات؟",
    "options": [
      "استفسار عن حالة",
      "استفسار روتيني",
      "استفسار متعلق بالمبيعات",
      "استفسار متابعة"
    ],
    "correct": 2,
    "explanation": "الاستفسارات المتعلقة بالمبيعات: تتم كتابتها إلى شركة أو فرد للحصول على معلومات حول منتج أو خدمة وقد تكون الخطوة الأولى لجمع المعلومات لتقرير."
  },
  {
    "question": "ما هو الغرض من المقدمة في خطاب الاستفسار؟",
    "options": [
      "لطرح جميع أسئلتك.",
      "لشكر المستلم مقدمًا.",
      "لتوفير معلومات الاتصال الخاصة بك.",
      "لتزويد جمهورك بالمعلومات الأساسية حول من وماذا ولماذا."
    ],
    "correct": 3,
    "explanation": "أ. المقدمة: الغرض من المقدمة هو تزويد جمهورك بالمعلومات الأساسية حول من وماذا ولماذا."
  },
  {
    "question": "خطاب طلب وظيفة يُعرف أيضًا باسم:",
    "options": [
      "السيرة الذاتية",
      "خطاب تغطية",
      "خطاب استفسار",
      "خطاب تسوية"
    ],
    "correct": 1,
    "explanation": "خطاب طلب وظيفة، المعروف أيضًا باسم خطاب التغطية، يجب إرساله أو تحميله مع سيرتك الذاتية عند التقدم للوظائف."
  },
  {
    "question": "ما هو الغرض الأساسي من خطاب طلب وظيفة؟",
    "options": [
      "توفير تاريخ كامل لخبرتك العملية.",
      "شرح سبب تأهلك للمنصب وضرورة اختيارك للمقابلة.",
      "طلب معلومات عن الشركة.",
      "الشكوى من تجربة سابقة."
    ],
    "correct": 1,
    "explanation": "في حين أن سيرتك الذاتية تقدم تاريخًا لخبرتك العملية ومخططًا لمهاراتك وإنجازاتك، فإن خطاب طلب الوظيفة الذي ترسله إلى صاحب العمل يوضح سبب تأهلك للمنصب وضرورة اختيارك للمقابلة."
  },
  {
    "question": "لماذا من المهم كتابة خطاب متابعة بعد مقابلة عمل؟",
    "options": [
      "إنه مطلب قانوني.",
      "إنه يظهر الاحترافية والاهتمام بالتفاصيل.",
      "يسمح لك بطلب راتب أعلى.",
      "إنه ضروري فقط إذا كنت تعتقد أن المقابلة سارت بشكل سيء."
    ],
    "correct": 1,
    "explanation": "إذا أجريت مقابلة عمل، فإن خطاب المتابعة الذي تشكر فيه المحاور على وقته مهم بشكل خاص لإظهار احترافيتك واهتمامك بالتفاصيل."
  },
  {
    "question": "إرسال خطاب متابعة بعد المقابلة يسمح لك بالقيام بماذا؟",
    "options": [
      "انتقاد أسئلة المحاور.",
      "التأكيد مرة أخرى على سبب اعتقادك بأنك الخيار المثالي للوظيفة.",
      "سحب طلبك.",
      "المطالبة بقرار توظيف فوري."
    ],
    "correct": 1,
    "explanation": "يسمح لك أيضًا بذكر أي شيء نسيته أثناء مقابلتك والتأكيد مرة أخرى على سبب اعتقادك بأنك الخيار المثالي للوظيفة."
  },
  {
    "question": "ما هو 'خطاب التسوية' (Adjustment Letter) الذي يُكتب ردًا على ماذا؟",
    "options": [
      "عرض عمل.",
      "طلب معلومات.",
      "شكوى بشأن منتج أو خدمة.",
      "دعوة لحضور حدث."
    ],
    "correct": 2,
    "explanation": "خطاب التسوية هو خطاب يُكتب ردًا على شخص اشتكى من منتج أو خدمة قمت ببيعها له."
  },
  {
    "question": "ما هو الهدف الرئيسي من خطاب التسوية؟",
    "options": [
      "إلقاء اللوم على العميل في المشكلة.",
      "تجاهل الشكوى تمامًا.",
      "تقديم تعويض عن أفعالك وشرح موجز.",
      "الترويج لمنتجات أخرى."
    ],
    "correct": 2,
    "explanation": "هدفه الرئيسي هو تقديم تعويض عن أفعالك (إذا كان له ما يبرره) وتقديم شرح موجز لأفعالك."
  },
  {
    "question": "في الفقرة الأولى من خطاب التسوية، ماذا يجب أن تفعل فورًا بعد التحية؟",
    "options": [
      "وصف ما يجب على العميل القيام به.",
      "تقديم تنازل.",
      "تقديم نفسك واتباع ذلك فورًا باعتذار أو بيان أسف.",
      "الإشارة إلى خطوات لمنع تكرار الحدوث."
    ],
    "correct": 2,
    "explanation": "بعد التحية، قدم نفسك واتبع ذلك فورًا باعتذار أو بيان أسف."
  },
  {
    "question": "عند وصف الخطأ في خطاب التسوية، أي ضمير يجب استخدامه؟",
    "options": [
      "'أنا'، لتحمل المسؤولية الشخصية.",
      "'أنت'، للإشارة إلى العميل.",
      "'هم'، للإشارة إلى قسم آخر.",
      "'نحن'، لأن العميل لديه علاقة مع الشركة."
    ],
    "correct": 3,
    "explanation": "صف الخطأ باستخدام الضمير 'نحن'. تذكر، العميل لديه علاقة مع الشركة، وليس مع الأفراد فيها."
  },
  {
    "question": "أي من الكلمات التالية يجب تجنبها في خطاب التسوية؟",
    "options": [
      "اعتذار",
      "أسف",
      "تنازل",
      "معيب"
    ],
    "correct": 3,
    "explanation": "بعد أن تقر بالمشكلة، لا تكررها. تجنب استخدام كلمات مثل 'معيب'، 'خطأ'، 'إهمال'، إلخ."
  },
  {
    "question": "ما الذي يجب تضمينه في الفقرة الثانية من خطاب التسوية؟",
    "options": [
      "فقط اعتذار عن الخطأ.",
      "وصف لما يجب أن يقوم به العميل والشركة.",
      "عبارات حسن النية لإنهاء الخطاب.",
      "مقدمة عن نفسك والشركة."
    ],
    "correct": 1,
    "explanation": "الفقرة الثانية: صف بالتحديد ما يجب أن يقوم به العميل والشركة."
  },
  {
    "question": "ما هو الغرض من الخاتمة في خطاب الاستفسار؟",
    "options": [
      "طرح السؤال الرئيسي.",
      "تقديم نفسك.",
      "تأسيس حسن النية والتعبير عن الامتنان.",
      "سرد مواصفات المنتج."
    ],
    "correct": 2,
    "explanation": "ج. الخاتمة: تعمل الخاتمة على تأسيس حسن النية والتعبير عن الامتنان."
  },
  {
    "question": "صواب أم خطأ: يجب أن يكرر خطاب طلب الوظيفة ببساطة جميع المعلومات من سيرتك الذاتية.",
    "options": [
      "صواب",
      "خطأ"
    ],
    "correct": 1,
    "explanation": "بينما تقدم سيرتك الذاتية تاريخًا من خبرتك العملية وموجزًا لمهاراتك وإنجازاتك، فإن خطاب طلب الوظيفة الذي ترسله إلى صاحب العمل يشرح سبب كونك مؤهلاً للمنصب ويجب اختياره للمقابلة. إنه يشرح ويسلط الضوء، بدلاً من مجرد التكرار."
  },
  {
    "question": "ما هو الطول الأقصى لمعظم خطابات العمل؟",
    "options": [
      "ثلاث صفحات",
      "صفحتان",
      "صفحة واحدة",
      "لا يوجد حد للطول."
    ],
    "correct": 2,
    "explanation": "الخطابات، التي نادرًا ما يجب أن تتجاوز صفحة واحدة، هي شكل أساسي من أشكال الكتابة الفنية."
  }
],
'الفصل الرابع: المذكرات ورسائل البريد الإلكتروني': [
  {
    "question": "من هو الجمهور الأساسي للمذكرة (memo)؟",
    "options": [
      "العملاء الخارجيون والموردون.",
      "عامة الناس.",
      "الموظفون الداخليون داخل نفس الشركة.",
      "الجهات الحكومية."
    ],
    "correct": 2,
    "explanation": "المذكرات هي مراسلات داخلية، يكتبها الموظفون في شركة إلى الموظفين في نفس الشركة."
  },
  {
    "question": "كيف تختلف المذكرات عن الرسائل من حيث التنسيق؟",
    "options": [
      "تحتوي المذكرات على ثمانية مكونات أساسية، بينما تحتوي الرسائل على أسطر تعريفية.",
      "تحتوي المذكرات على أسطر تعريفية (التاريخ، إلى، من، الموضوع)، بينما تحتوي الرسائل على ثمانية مكونات أساسية.",
      "المذكرات والرسائل لها نفس التنسيق تمامًا.",
      "تكون المذكرات دائمًا مكتوبة بخط اليد، بينما تكون الرسائل مطبوعة."
    ],
    "correct": 1,
    "explanation": "للمذكرات تنسيق مختلف عن المكونات الأساسية للرسالة. تستبدل المذكرات المكونات الأساسية الثمانية للرسالة بأسطر التعريف التالية للمذكرة: التاريخ، إلى، من، الموضوع."
  },
  {
    "question": "كيف يتم 'توقيع' مذكرة مقارنة بالرسالة؟",
    "options": [
      "يتم وضع توقيع الكاتب الكامل في الأسفل.",
      "لا يتم توقيع المذكرات أو وضع الأحرف الأولى عليها.",
      "يتم وضع الأحرف الأولى من اسم الكاتب بجوار سطر 'من'.",
      "يكفي اسم الكاتب المطبوع."
    ],
    "correct": 2,
    "explanation": "بينما يتم توقيع الرسائل (المكون الأساسي رقم 7)، يتم وضع الأحرف الأولى على المذكرات بجوار سطر 'من'."
  },
  {
    "question": "ما هما العنصران اللذان يجب أن يوفرهما سطر موضوع جيد في المذكرة؟",
    "options": [
      "تاريخ ووقت.",
      "تحية وخاتمة.",
      "موضوع وتركيز.",
      "مشكلة وسؤال."
    ],
    "correct": 2,
    "explanation": "يقدم الموضوع الجيد كلاً من الموضوع والتركيز."
  },
  {
    "question": "في سطر الموضوع 'جدول إجازات المحاسبين'، ما هو التركيز؟",
    "options": [
      "المحاسبين",
      "الجدول",
      "جدول الإجازات",
      "الإجازات"
    ],
    "correct": 2,
    "explanation": "على سبيل المثال، سيقرأ سطر موضوع ناجح على النحو التالي: الموضوع: جدول إجازات المحاسبين. المحاسبون هو موضوع المذكرة؛ وجدول الإجازات هو التركيز."
  },
  {
    "question": "وفقًا لنموذج المذكرة، ما هو سبب التباعد الغريب في رسائل البريد الإلكتروني؟",
    "options": [
      "الكتابة بأحرف كبيرة بالكامل.",
      "استخدام الكثير من علامات الترقيم.",
      "الأحجام المختلفة للشاشات واستخدام خاصية التفاف النص.",
      "إرسال رسائل بريد إلكتروني طويلة جدًا."
    ],
    "correct": 2,
    "explanation": "هذا التباعد الغريب ناتج عن اختلاف أحجام الشاشات. نستخدم عادةً خاصية التفاف النص عند كتابة المذكرات والرسائل... ليس هذا هو الحال مع البريد الإلكتروني. لتجنب مشكلة التباعد الغريب الناتج عن اختلاف أحجام الشاشات، لا تستخدم خاصية التفاف النص."
  },
  {
    "question": "لتجنب مشكلة 'التمرير اللانهائي' في رسالة بريد إلكتروني، ما هو الطول الموصى به؟",
    "options": [
      "حوالي 50 سطراً (ثلاث شاشات).",
      "حوالي 14 سطراً (شاشة واحدة).",
      "بطول رسالة قياسية.",
      "لا يوجد طول موصى به."
    ],
    "correct": 1,
    "explanation": "لتجنب هذه المشكلة، قم بقصر بريدك الإلكتروني على حوالي 14 سطراً (شاشة واحدة)."
  },
  {
    "question": "أي عبارة صحيحة حول استخدام البريد الإلكتروني في سياق الأعمال؟",
    "options": [
      "لا يمكن استخدام البريد الإلكتروني إلا للاتصالات الداخلية.",
      "يمكن استخدام البريد الإلكتروني للاتصالات الداخلية والخارجية على حد سواء.",
      "البريد الإلكتروني مخصص فقط للاتصالات الخارجية.",
      "تم استبدال البريد الإلكتروني بالكامل بالمذكرات."
    ],
    "correct": 1,
    "explanation": "البريد الإلكتروني، على النقيض من ذلك، يمكن أن يكون داخليًا و/أو خارجيًا. يمكن للموظفين إرسال بريد إلكتروني لبعضهم البعض داخل الشركة و/أو إرسال بريد إلكتروني إلى الموردين والعملاء والزملاء خارج الشركة."
  },
  {
    "question": "ما هي الفائدة الرئيسية لاستخدام البريد الإلكتروني للتواصل؟",
    "options": [
      "يضمن أن المستلم سيقرأ الرسالة على الفور.",
      "يسمح للكاتب بالتواصل الفوري مع القارئ ويمكن إرساله إلى العديد من القراء في نفس الوقت.",
      "يلغي الحاجة إلى سطور موضوع واضحة.",
      "إنه أكثر رسمية من الرسالة المطبوعة."
    ],
    "correct": 1,
    "explanation": "يسمح البريد الإلكتروني للكاتب بالتواصل الفوري مع القارئ. يمكن إرسال البريد الإلكتروني إلى العديد من القراء في نفس الوقت."
  },
  {
    "question": "لماذا من المهم استخدام عنوان بريد إلكتروني احترافي؟",
    "options": [
      "من الأسهل تذكره.",
      "يجعلك تبدو أكثر ودية وعفوية.",
      "من المرجح أن يفتح مديرو التوظيف وينظرون في رسائل البريد الإلكتروني من العناوين الاحترافية.",
      "يسمح لك باستخدام المزيد من الرموز التعبيرية في اتصالاتك."
    ],
    "correct": 2,
    "explanation": "تخيل أنك مدير توظيف... أي بريد إلكتروني من المرجح أن تفتحه وتقرأه وأي شخص ستفكر في توظيفه؟ من الواضح أن الشخص الثاني [صاحب العنوان الاحترافي]."
  },
  {
    "question": "ما هو الغرض من 'الدعوة إلى اتخاذ إجراء' (CTA) في رسالة بريد إلكتروني؟",
    "options": [
      "لتوفير معلومات أساسية.",
      "لتحية المستلم.",
      "لذكر الإجراء المتوقع من المستلم بوضوح.",
      "لإنهاء البريد الإلكتروني بتوقيع احترافي."
    ],
    "correct": 2,
    "explanation": "في أي حال، اذكر الإجراء المتوقع من المستلم بوضوح في رسالة البريد الإلكتروني."
  },
  {
    "question": "ما المعلومات التي يجب تضمينها في توقيع بريد إلكتروني احترافي لجهة اتصال لأول مرة؟",
    "options": [
      "اسمك الأول فقط.",
      "اسمك الكامل ودورك والشركة أو العلامة التجارية التي ترتبط بها.",
      "رابط إلى ملفك الشخصي على وسائل التواصل الاجتماعي.",
      "اقتباس مشهور."
    ],
    "correct": 1,
    "explanation": "عندما تراسل شخصًا ما لأول مرة، استخدم توقيع بريد إلكتروني يحدد اسمك الكامل ودورك والشركة أو العلامة التجارية التي ترتبط بها."
  },
  {
    "question": "ما الفرق بين CC و BCC في البريد الإلكتروني؟",
    "options": [
      "CC للمستلم الرئيسي، و BCC للمستلمين الثانويين.",
      "لا يوجد فرق.",
      "في CC، يمكن لجميع المستلمين رؤية من تم نسخه أيضًا؛ في BCC، يتم إخفاء المستلمين عن بعضهم البعض.",
      "BCC لإرسالها إلى مجموعات كبيرة، و CC للمجموعات الصغيرة."
    ],
    "correct": 2,
    "explanation": "CC تعني نسخة كربونية. وهذا يعني أن جميع المستلمين يمكنهم رؤية من تم نسخه أيضًا في البريد الإلكتروني. BCC تعني نسخة كربونية عمياء. وهذا يعني أن المستلمين المضافين في حقل BCC مخفيون عن المستلمين الآخرين."
  },
  {
    "question": "متى يكون من المناسب استخدام BCC؟",
    "options": [
      "عندما تريد أن يرى الجميع من تم إرسال البريد الإلكتروني إليه.",
      "لإبقاء الأشخاص على اطلاع على محادثة جارية.",
      "عندما تريد إرسال بريد إلكتروني إلى مجموعة كبيرة من الأشخاص دون الكشف عن عناوين بريدهم الإلكتروني.",
      "يجب ألا تستخدم BCC أبدًا في بيئة مهنية."
    ],
    "correct": 2,
    "explanation": "متى تستخدم BCC: عندما تريد إرسال بريد إلكتروني إلى مجموعة كبيرة من الأشخاص دون الكشف عن عناوين بريدهم الإلكتروني."
  },
  {
    "question": "ما فائدة جدولة رسالة بريد إلكتروني ليتم إرسالها لاحقًا؟",
    "options": [
      "تضمن أن البريد الإلكتروني أقصر.",
      "تسمح للبريد الإلكتروني بالوصول إلى المستلم خلال ساعات ذروة عمله، مما يعزز فرصة الرد.",
      "تقوم تلقائيًا بفحص الأخطاء الإملائية.",
      "تتجاوز مرشح البريد العشوائي للمستلم."
    ],
    "correct": 1,
    "explanation": "وبالتالي، فإن جدولة بريد إلكتروني للوصول إلى المستلم خلال ساعات ذروة عمله تعزز فرصة ردهم على الفور."
  },
  {
    "question": "ما النبرة التي تخلقها الكتابة بأحرف كبيرة في رسالة بريد إلكتروني؟",
    "options": [
      "نبرة مهنية وجادة.",
      "نبرة ودية وعفوية.",
      "نبرة سلبية، تسمى اللهب (flaming)، كما لو كنت تصرخ.",
      "نبرة حماسية ومتحمسة."
    ],
    "correct": 2,
    "explanation": "تحسين النبرة - تخبرنا الدراسات أن الكتابة بأحرف كبيرة تخلق نبرة سلبية، تسمى اللهب. على سبيل المثال، عندما يكتب شخص ما، أخبر مرؤوسيك بتحسين نبرتهم في البريد الإلكتروني، يشعر القراء أنهم يتعرضون للصراخ."
  },
  {
    "question": "صواب أم خطأ: يحتوي البريد الإلكتروني الناجح على سطر موضوع به موضوع وتركيز ومقدمة ومتن وخاتمة.",
    "options": [
      "صواب",
      "خطأ"
    ],
    "correct": 0,
    "explanation": "يحتوي البريد الإلكتروني الناجح على سطر موضوع به موضوع وتركيز ومقدمة ومتن وخاتمة."
  },
  {
    "question": "أي مما يلي يعتبر خطأ شائعًا في البريد الإلكتروني؟",
    "options": [
      "استخدام سطر موضوع واضح ومحدد.",
      "استخدام عنوان بريد إلكتروني احترافي.",
      "استخدام 'الرد على الكل' بشكل غير ضروري.",
      "مراجعة الأخطاء النحوية والإملائية."
    ],
    "correct": 2,
    "explanation": "أحد أخطاء البريد الإلكتروني الشائعة هو استخدام 'الرد على الكل' بشكل غير ضروري."
  },
  {
    "question": "إذا كنت تراسل شخصًا قابلته في حدث ما لأول مرة، فماذا يجب أن تفعل؟",
    "options": [
      "افترض أنهم يتذكرونك وانتقل مباشرة إلى صلب الموضوع.",
      "قدم نفسك واذكر الخلفية، مع ذكر اسم الحدث.",
      "انتظر منهم أن يراسلوك أولاً.",
      "استخدم تحية وهدفًا عامًا جدًا."
    ],
    "correct": 1,
    "explanation": "إذا كنت تراسل شخصًا ما لأول مرة، فقدم نفسك، واذكر خلفية البريد الإلكتروني. على سبيل المثال، عندما تراسل شخصًا قابلته في حدث ما... تأكد من ذكر اسم الحدث."
  },
  {
    "question": "ماذا يجب أن تفعل إذا كان محتوى بريدك الإلكتروني طويلاً جدًا؟",
    "options": [
      "أرسله كله دفعة واحدة لتكون فعالاً.",
      "استخدم خطًا صغيرًا جدًا لجعله مناسبًا لشاشة واحدة.",
      "تواصل بشأن العناصر الرئيسية أولاً واحفظ الباقي لوقت لاحق، حيث قد يتم تخطي رسائل البريد الإلكتروني الطويلة.",
      "حول البريد الإلكتروني الطويل إلى مذكرة بدلاً من ذلك."
    ],
    "correct": 2,
    "explanation": "إذا كان لديك الكثير لتقوله، فمن الأفضل توصيل العناصر الرئيسية والمهمة في البريد الإلكتروني الأول وحفظ الباقي لوقت لاحق. قد يتم تخطي رسائل البريد الإلكتروني الطويلة جدًا وقد لا تحصل على الرد الذي تشتد الحاجة إليه من الشخص الآخر."
  }
],
'الفصل الخامس: السير الذاتية': [
  {
    "question": "أي من الطرق التالية هي طريقة موصى بها للعثور على فرص عمل؟",
    "options": [
      "انتظار الشركات للاتصال بك مباشرة.",
      "التقديم فقط للوظائف المعلن عنها في الصحف.",
      "التواصل، مراكز التوظيف، والبحث عبر الإنترنت.",
      "استخدام موقع ويب واحد فقط للوظائف بشكل حصري."
    ],
    "correct": 2,
    "explanation": "أين يجب أن يبحث الطلاب عن وظائف؟ يجب أن يجربوا ما يلي: 1-التواصل... 2-مراكز التوظيف المهني... 3.البحث عبر الإنترنت."
  },
  {
    "question": "ما هو الغرض الرئيسي من السيرة الذاتية؟",
    "options": [
      "أن تكون بمثابة عقد عمل قانوني.",
      "السماح للمتقدمين بوصف خبراتهم ومهاراتهم بكلماتهم الخاصة.",
      "تقديم سرد مفصل لقصة حياة المتقدم.",
      "أن تكون مكانًا للمتقدمين لسرد هواياتهم واهتماماتهم حصريًا."
    ],
    "correct": 1,
    "explanation": "تتيح السير الذاتية للمتقدمين فرصة وصف خبراتهم ومهاراتهم بكلماتهم الخاصة."
  },
  {
    "question": "أي نوع من السير الذاتية يركز على خبرتك العملية ويسردها بترتيب عكسي؟",
    "options": [
      "السيرة الذاتية الوظيفية",
      "السيرة الذاتية المختلطة",
      "السيرة الذاتية ذات الترتيب الزمني العكسي",
      "السيرة الذاتية القائمة على المهارات"
    ],
    "correct": 2,
    "explanation": "السيرة الذاتية ذات الترتيب الزمني العكسي... لها تنسيق سيرة ذاتية كلاسيكي، مع التركيز على خبرتك العملية وإنجازاتك المهنية. تسرد تاريخ عملك بترتيب عكسي، من الأحدث إلى الأقدم."
  },
  {
    "question": "السيرة الذاتية الوظيفية ستكون الأنسب لمن؟",
    "options": [
      "خريج جامعي حديث لديه الكثير من الخبرة العملية ذات الصلة.",
      "فرد أكبر سنًا يغير مهنته.",
      "شخص يريد إبراز نموه المهني المستمر.",
      "الطلاب المتقدمون لوظيفتهم الأولى."
    ],
    "correct": 1,
    "explanation": "السير الذاتية الوظيفية أكثر شيوعًا للأفراد الأكبر سنًا الذين يغيرون وظائفهم أو مجالاتهم المهنية."
  },
  {
    "question": "السيرة الذاتية المختلطة هي مزيج من أي نوعين من السير الذاتية؟",
    "options": [
      "الإبداعية والتقنية",
      "الزمنية والوظيفية",
      "عبر الإنترنت والمطبوعة",
      "الطلابية والمهنية"
    ],
    "correct": 1,
    "explanation": "السيرة الذاتية المختلطة هي مزيج من النوعين أعلاه [الترتيب الزمني العكسي والوظيفي]. إنها تسلط الضوء على خبرتك ومجموعة مهاراتك."
  },
  {
    "question": "ما هو ملخص السيرة الذاتية؟",
    "options": [
      "فقرة طويلة تفصل كل وظيفة شغلتها على الإطلاق.",
      "فقرة من 2-3 جمل تعطي لمحة عن خبرتك وإنجازاتك ذات الصلة.",
      "بيان حول أهدافك المهنية وما تريده من الشركة.",
      "قائمة بهواياتك واهتماماتك."
    ],
    "correct": 1,
    "explanation": "ملخص السيرة الذاتية هو فقرة من 2-3 جمل تعطي للقائمين بالتوظيف لمحة عن خبرتك ذات الصلة وتتباهى بإنجازاتك في هذا المجال."
  },
  {
    "question": "متى يجب أن تختار استخدام هدف السيرة الذاتية بدلاً من الملخص؟",
    "options": [
      "عندما يكون لديك سنوات عديدة من الخبرة ذات الصلة.",
      "عندما لا يكون لديك خبرة عمل أو عندما تغير مهنتك.",
      "عندما يطلب الوصف الوظيفي ملخصًا على وجه التحديد.",
      "يجب عليك دائمًا استخدام كل من الملخص والهدف."
    ],
    "correct": 1,
    "explanation": "اختر بيان هدف السيرة الذاتية إذا لم يكن لديك خبرة عمل أو على الأقل لا شيء متعلق بالمنصب الذي تتقدم إليه (المتقدمون المبتدئون، ومغيرو المهن، والطلاب، وما إلى ذلك)."
  },
  {
    "question": "ما المقصود بـ 'تخصيص' سيرتك الذاتية؟",
    "options": [
      "استخدام سيرة ذاتية قياسية وعامة لجميع طلبات العمل.",
      "جعل السيرة الذاتية أطول ما يمكن.",
      "جعلها ذات صلة بالوصف الوظيفي عن طريق تضمين كلمات رئيسية من إعلان الوظيفة.",
      "تغيير الخط ونظام الألوان لكل طلب."
    ],
    "correct": 2,
    "explanation": "تخصيص السيرة الذاتية يعني جعلها ذات صلة قدر الإمكان بالوصف الوظيفي عن طريق تضمين كلمات رئيسية مأخوذة من إعلان وظيفة ونثرها في جميع أنحاء السيرة الذاتية."
  },
  {
    "question": "لماذا يعد تخصيص السيرة الذاتية مهمًا لأنظمة تتبع المتقدمين (ATS)؟",
    "options": [
      "يفضل ATS السير الذاتية ذات التنسيق الإبداعي.",
      "كلما زادت الكلمات الرئيسية ذات الصلة من إعلان الوظيفة، زادت الدرجة التي يمنحها ATS لطلبك.",
      "يرفض ATS تلقائيًا السير الذاتية التي تم تخصيصها.",
      "لا يقوم ATS بالبحث عن الكلمات الرئيسية."
    ],
    "correct": 1,
    "explanation": "يمكنك تضمين الكلمات الرئيسية التي سيفحصها نظام تتبع المتقدمين (ATS) ويمنحك درجة. كلما زادت الكلمات الرئيسية ذات الصلة، زادت الدرجة التي تحصل عليها. وهذا يؤدي إلى رؤية طلبك من قبل مسؤول التوظيف."
  },
  {
    "question": "كيف يجب أن تدرج تعليمك في السيرة الذاتية إذا كان لديك شهادة جامعية؟",
    "options": [
      "أدرج شهادتك الثانوية أولاً، ثم شهادتك الجامعية.",
      "أدرج فقط معلومات مدرستك الثانوية.",
      "ضع أعلى شهادة حصلت عليها أولاً واترك معلومات المدرسة الثانوية.",
      "أدرج كل مدرسة التحقت بها على الإطلاق بترتيب زمني."
    ],
    "correct": 2,
    "explanation": "الشهادة: ضع أعلى شهادة حصلت عليها أولاً. وهذا يعني ترك معلومات المدرسة الثانوية إذا كنت قد أنهيت جامعة أو كلية."
  },
  {
    "question": "ما الفرق بين المهارات والخبرة؟",
    "options": [
      "إنهما نفس الشيء.",
      "المهارات هي المعرفة من تاريخ العمل، بينما الخبرة هي القدرات.",
      "المهارات هي القدرات التي يمتلكها المرشح، بينما الخبرة هي المعرفة المكتسبة من خلال تاريخ العمل.",
      "يجب إدراج الخبرة فقط في السيرة الذاتية، وليس المهارات."
    ],
    "correct": 2,
    "explanation": "المهارات هي القدرات التي يقدمها المرشحون،... أما الخبرة، من ناحية أخرى، فهي المعرفة التي اكتسبها المرشحون من خلال تاريخ عملهم."
  },
  {
    "question": "أي من التالي مثال على 'قسم إضافي في السيرة الذاتية'؟",
    "options": [
      "معلومات الاتصال",
      "خبرة العمل",
      "التعليم",
      "الشهادات والجوائز"
    ],
    "correct": 3,
    "explanation": "قم بتضمين أقسام إضافية في السيرة الذاتية [مثل] الهوايات والاهتمامات، والعمل التطوعي، وخبرة التدريب، والشهادات والجوائز، واللغات، والمشاريع."
  },
  {
    "question": "ما المستند الذي يجب أن يكمل سيرتك الذاتية؟",
    "options": [
      "سيرة ذاتية ثانية",
      "خطاب تغطية",
      "خطاب توصية",
      "كشف درجات"
    ],
    "correct": 1,
    "explanation": "أكمل سيرتك الذاتية بخطاب تغطية."
  },
  {
    "question": "ما هي الخطوة الأخيرة قبل إرسال سيرتك الذاتية؟",
    "options": [
      "إضافة المزيد من الكلمات الرئيسية، حتى لو لم تكن ذات صلة.",
      "نشرها على وسائل التواصل الاجتماعي.",
      "التحقق المزدوج ومراجعتها بحثًا عن أي أخطاء إملائية أو نحوية.",
      "حذف قسم معلومات الاتصال."
    ],
    "correct": 2,
    "explanation": "عن طريق التحقق المزدوج من سيرتك الذاتية قبل إرسالها... افحص طلبك بالكامل باستخدام أداة مثل Grammarly للتحقق من الأخطاء الإملائية أو النحوية."
  },
  {
    "question": "عند سرد خبرة العمل، ما الذي يتم إغفاله غالبًا ولكنه مهم جدًا لتضمينه؟",
    "options": [
      "اسم مديرك.",
      "قائمة بالواجبات الأساسية اليومية.",
      "الإنجازات الرئيسية التي تظهر مدى جودة أدائك لواجباتك.",
      "عنوان الشركة."
    ],
    "correct": 2,
    "explanation": "الإنجازات الرئيسية: غالبًا ما يتم التغاضي عنها ولكنها مهمة للغاية. يعرف أصحاب العمل ما فعلته. إنهم بحاجة إلى معرفة مدى جودة أدائك لها."
  },
  {
    "question": "ما الزمن الذي يجب استخدامه عند وصف واجبات وظيفتك الحالية؟",
    "options": [
      "الماضي",
      "المستقبل",
      "الحاضر",
      "لا يهم."
    ],
    "correct": 2,
    "explanation": "استخدم صيغة المضارع لوصف الوظيفة الحالية وصيغة الماضي لمناقشة الخبرة السابقة."
  },
  {
    "question": "في ملخص أو هدف السيرة الذاتية، أي مما يلي يجب تجنبه؟",
    "options": [
      "ذكر مهاراتك وإنجازاتك.",
      "ذكر اسم الشركة.",
      "التركيز على الواجبات اليومية بدلاً من الإنجازات.",
      "استخدام الأرقام لتحديد الإنجازات."
    ],
    "correct": 2,
    "explanation": "يركز المثال الخاطئ على الواجبات اليومية، بينما يوضح المثال الصحيح مهارات التصميم الجرافيكي والإنجازات والخبرة."
  },
  {
    "question": "السيرة الذاتية القائمة على المهارات هي اسم آخر لأي نوع من السير الذاتية؟",
    "options": [
      "ذات الترتيب الزمني العكسي",
      "الوظيفية",
      "المختلطة",
      "الأكاديمية"
    ],
    "correct": 1,
    "explanation": "السير الذاتية الوظيفية... تركز على مهاراتك وصفاتك، ومن هنا جاء الاسم الثانوي، السيرة الذاتية القائمة على المهارات."
  },
  {
    "question": "أي من التالي مثال على 'مهارة ناعمة' يمكن تضمينها في السيرة الذاتية؟",
    "options": [
      "البرمجة بلغة بايثون",
      "تشغيل رافعة شوكية",
      "مهارات التواصل",
      "تحليل البيانات"
    ],
    "correct": 2,
    "explanation": "مهارات التواصل: يمكن أن تتكون من المهارات الشخصية، والتواصل غير اللفظي، ومهارات الاستماع النشط، والمهارات الشخصية."
  },
  {
    "question": "صواب أم خطأ: قسم 'الأهداف' هو دائمًا مكون مطلوب في السيرة الذاتية الحديثة.",
    "options": [
      "صواب",
      "خطأ"
    ],
    "correct": 1,
    "explanation": "الأهداف: هذا اختياري: إخبار نوع العمل الذي يبحث عنه المتقدم."
  }
],
'الفصل السادس: المقترح الفني': [
  {
    "question": "ما هو الغرض الأساسي من مقترح المشروع في الكتابة الفنية؟",
    "options": [
      "تقديم تقرير نهائي عن مشروع مكتمل.",
      "أن يكون وثيقة مقنعة لإقناع القارئ بالموافقة على المشروع.",
      "أن يكون عقدًا غير رسمي ليس له صفة حقيقية.",
      "سرد المشاكل في نظام حالي دون تقديم حلول."
    ],
    "correct": 1,
    "explanation": "في الكتابة الفنية، المقترح هو وثيقة مقنعة تهدف إلى إقناع القارئ بالموافقة على مشروع، أو تنفيذ خطة، أو تفويض مسار عمل."
  },
  {
    "question": "المقترح المكتوب لواجب في فصل الكتابة الفنية يجب أن يحدد ويعرف ماذا؟",
    "options": [
      "مؤهلات المؤلف فقط.",
      "الميزانية والجدول الزمني فقط.",
      "المشكلة التي تحتاج إلى حل أو الفرصة التي يمكن الاستفادة منها.",
      "تاريخ الشركة."
    ],
    "correct": 2,
    "explanation": "المقترحات المكتوبة كواجب في فصول الكتابة الفنية تقوم بشكل عام بما يلي: 1. تحديد وتعريف المشكلة التي تحتاج إلى حل أو الفرصة التي يمكن الاستفادة منها."
  },
  {
    "question": "على ماذا يجب أن يركز المقترح ليكون مقنعًا؟",
    "options": [
      "تعقيد المشكلة.",
      "النتائج والفوائد وجدوى الفكرة المقترحة.",
      "آراء المؤلف الشخصية.",
      "القيود والصعوبات."
    ],
    "correct": 1,
    "explanation": "ركز على النتائج والفوائد وجدوى فكرتك المقترحة."
  },
  {
    "question": "أي من هذه ليس مكونًا قياسيًا لمقترح رسمي؟",
    "options": [
      "صفحة العنوان",
      "الملخص",
      "مذكرات شخصية لتقدم المشروع",
      "جدول المحتويات"
    ],
    "correct": 2,
    "explanation": "عادة ما يتضمن المقترح جيد التنظيم: صفحة العنوان، الملخص، جدول المحتويات، المقدمة، مراجعة الأدبيات (أو الخلفية)، الإجراء، المراجع، الملاحق."
  },
  {
    "question": "ما هو الغرض من الملخص (abstract) في مقترح المشروع؟",
    "options": [
      "تقديم ملخص طويل جدًا ومفصل للمقترح بأكمله.",
      "أن يكون بيانًا موجزًا لموضوع المشروع وإجراءاته ونتائجه المتوقعة.",
      "سرد جدول المحتويات.",
      "شكر المشرف الأكاديمي."
    ],
    "correct": 1,
    "explanation": "يجب أن يكون الملخص بيانًا موجزًا لموضوع المشروع والإجراء والنتيجة المتوقعة للمشروع، في ثلاث أو أربع جمل."
  },
  {
    "question": "أي قسم من المقترح يخبر القارئ عن موضوع مشروعك وسبب أهميته؟",
    "options": [
      "الإجراء",
      "مراجعة الأدبيات",
      "المقدمة",
      "الميزانية"
    ],
    "correct": 2,
    "explanation": "'المقدمة' تخبر القارئ 1) عن موضوع مشروعك، 2) لماذا يستحق المشروع القيام به..."
  },
  {
    "question": "ما هو الغرض من قسم 'مراجعة الأدبيات' أو 'الخلفية'؟",
    "options": [
      "اقتراح منهجية جديدة.",
      "إظهار أنك تعرف خلفية وسياق موضوعك.",
      "عرض ميزانية المشروع.",
      "إنهاء المقترح بكلمة أخيرة."
    ],
    "correct": 1,
    "explanation": "لإظهار لمشرفك أنك تعرف ما تتحدث عنه بخصوص مشروعك، تحتاج إلى إثبات أنك تعرف خلفية وسياق موضوعك."
  },
  {
    "question": "أي قسم يعتبر 'قلب المقترح'؟",
    "options": [
      "صفحة العنوان",
      "الملخص",
      "الإجراء / المنهجية",
      "المراجع"
    ],
    "correct": 2,
    "explanation": "الإجراء أو المنهجية هو قلب المقترح لأنه يجب أن يخبر القارئ كيف تقترح تنفيذ مشروعك."
  },
  {
    "question": "ما الذي يجب أن يقنع به قسم 'الإجراء' القارئ؟",
    "options": [
      "أن المشروع سيكون مكلفًا للغاية.",
      "أنك تفهم مهمتك بوضوح، ولديك خطة زمنية منطقية، وحددت جميع الموارد اللازمة.",
      "أنك قرأت العديد من الكتب حول هذا الموضوع.",
      "أن المشكلة غير قابلة للحل."
    ],
    "correct": 1,
    "explanation": "يجب أن يقنع مشرفك (أو في الصناعة مديرك أو عميلك المحتمل) بأنك تفهم مهمتك بوضوح، ولديك خطة زمنية منطقية لحل مشاكلك، وحددت جميع الموارد التي تحتاجها."
  },
  {
    "question": "ما نوع المواد التي توضع في قسم 'الملاحق'؟",
    "options": [
      "المقدمة والخاتمة.",
      "المواد الطويلة جدًا بحيث لا يمكن إدراجها في النص، أو غير ذات صلة مباشرة، مثل البيانات الأولية.",
      "الملخص وجدول المحتويات.",
      "الحجة الرئيسية للمقترح."
    ],
    "correct": 1,
    "explanation": "تحتوي الملاحق على مواد طويلة جدًا بحيث لا يمكن تضمينها في النص، أو ليست ذات صلة مباشرة. توضع هنا أنواع معينة من البيانات الأولية، ومواد الخلفية، وما شابه ذلك."
  },
  {
    "question": "ما هو 'الملخص التنفيذي' في سياق التقرير؟",
    "options": [
      "اسم آخر للملخص.",
      "قسم يقدم نظرة عامة موجزة عن كل قسم من الوثيقة بأكملها في خمس إلى عشر صفحات.",
      "رسالة إلى الفريق التنفيذي.",
      "قائمة بجميع المديرين التنفيذيين في الشركة."
    ],
    "correct": 1,
    "explanation": "يقدم هذا القسم، الذي يأتي بعد الملخص، نظرة عامة موجزة عن كل قسم من الوثيقة بأكملها في خمس إلى عشر صفحات. الملخصات التنفيذية مطلوبة في التقارير المهنية."
  },
  {
    "question": "متى يتم استخدام 'خطاب الإحالة' عادة؟",
    "options": [
      "في كل مقترح، بغض النظر عن المستلم.",
      "عند تقديم المقترح أو التقرير إلى جهة اتصال خارج الحرم الجامعي.",
      "يتم وضعه في نهاية الوثيقة.",
      "يحل محل المقدمة."
    ],
    "correct": 1,
    "explanation": "عادة ما يتم إرفاق خطاب إحالة قبل صفحة العنوان إذا تم تقديم المقترح أو التقرير إلى جهة اتصال خارج الحرم الجامعي."
  },
  {
    "question": "ما الذي يجب تضمينه في قسم 'الجدول الزمني والميزانية' في المقترح؟",
    "options": [
      "فكرة غامضة عن مدة المشروع.",
      "التكلفة الإجمالية للمشروع فقط.",
      "جدول زمني مفصل للإنجاز وميزانية مفصلة.",
      "مناقشة لميزانيات المشاريع السابقة."
    ],
    "correct": 2,
    "explanation": "قدم جدولًا زمنيًا مفصلاً لإنجاز المشروع... قدم ميزانية مفصلة لإكمال المشروع المقترح."
  },
  {
    "question": "وفقًا لهيكل الملخص المكون من ثلاث جمل، ماذا يجب أن تفعل الجملة الأولى؟",
    "options": [
      "تشير إلى الاستنتاجات المتوقعة.",
      "تشير إلى المواد التي سيتم فحصها.",
      "تقدم موضوع المشروع.",
      "تذكر الميزانية."
    ],
    "correct": 2,
    "explanation": "تقدم الجملة الأولى موضوع المشروع، مع الإشارة (إن وجدت) إلى الوكالة خارج الحرم الجامعي التي يتم تنفيذ المشروع معها."
  },
  {
    "question": "ما هي قيمة قائمة المراجع (bibliography) في التقرير؟",
    "options": [
      "إنها مفيدة فقط للمؤلف.",
      "قيمتها كقائمة بالمواد ذات الصلة تجعلها غالبًا مفيدة للرجوع إليها بشكل مستقل عن التقرير نفسه.",
      "تعمل على جعل التقرير أطول.",
      "هي المكان الذي يتم فيه شرح الحواشي بالتفصيل."
    ],
    "correct": 1,
    "explanation": "تسرد قائمة المراجع جميع المواد المذكورة في الملاحظات. قيمتها كقائمة بالمواد ذات الصلة تجعلها غالبًا مفيدة للاستشارة بشكل مستقل عن التقرير نفسه."
  },
  {
    "question": "يجب أن يظهر المقترح أنك تفهم المشكلة بوضوح لتحقيق ماذا؟",
    "options": [
      "لإظهار مدى صعوبة المشروع.",
      "لإقناع القارئ بقدرتك على حلها.",
      "للحصول على ميزانية أكبر.",
      "لتمديد الموعد النهائي للمشروع."
    ],
    "correct": 1,
    "explanation": "يجب أن تُظهر أنك تفهم المشكلة/الوضع بوضوح إذا كنت تريد إقناع القارئ بقدرتك على حلها."
  },
  {
    "question": "عند وصف الحل المقترح، من الأفضل أن تفعل ماذا؟",
    "options": [
      "إبقاء الوصف عامًا وموجزًا للغاية.",
      "وصف الأقسام الفرعية فقط بدون نظرة عامة.",
      "إعطاء نظرة عامة ثم تقسيمها إلى أقسام فرعية أكثر تفصيلاً.",
      "التركيز فقط على العقبات."
    ],
    "correct": 2,
    "explanation": "غالبًا ما يكون من الأفضل إعطاء نظرة عامة على فكرتك، ثم تقسيمها إلى أقسام فرعية أكثر تفصيلاً."
  },
  {
    "question": "صواب أم خطأ: يجب الإشارة إلى جميع المواد الموجودة في الملاحق في النص الرئيسي.",
    "options": [
      "صواب",
      "خطأ"
    ],
    "correct": 0,
    "explanation": "يجب الإشارة إلى جميع المواد في الملاحق في النص حتى يعرف القراء سبب وجودها هنا."
  },
  {
    "question": "ما هو السؤال الرئيسي الذي يتوقع أن يجيب عليه قسم 'الإجراء'؟",
    "options": [
      "لماذا يستحق المشروع القيام به؟",
      "ما أنواع الأبحاث التي تم إجراؤها من قبل؟",
      "ما هي البيانات اللازمة للمشروع وكيف سيتم جمعها؟",
      "لماذا يعتبر مشروعك موضوعًا جيدًا لمتطلبات الدرجة العلمية؟"
    ],
    "correct": 2,
    "explanation": "بعض الأسئلة الأخرى التي يتوقع القارئ منك الإجابة عليها في هذا القسم هي: ... ما هي البيانات اللازمة للمشروع وكيف سيتم جمعها؟"
  },
  {
    "question": "ما هو الغرض من خاتمة المقترح؟",
    "options": [
      "تقديم مشاكل جديدة.",
      "سرد المراجع.",
      "توفير تفاصيل الميزانية.",
      "إنها الفرصة الأخيرة لإقناع القارئ ويجب أن تكون مقنعة."
    ],
    "correct": 3,
    "explanation": "الخاتمة: هذه هي فرصتك الأخيرة لإقناع القارئ؛ كن مقنعًا!"
  }
],
'امتحان سابق 2023-2024': [
  {
    "questionNumber": 1,
    "question": "قد يكون للمستند جمهور واحد (القارئ الأساسي) أو جماهير متعددة (القراء الثانويون).",
    "options": ["صحيح", "خطأ"],
    "correct": 0,
    "explanation": "ينص المصدر على أن 'A document may also have one audience (the primary reader) or multiple audiences (the secondary readers)'."
  },
  {
    "questionNumber": 2,
    "question": "صلاحيات التكليف (Term of reference) هي أحد مكونات المادة الختامية (end matter) في التقرير الفني.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "يتم إدراج 'Terms of Reference' ضمن 'Preliminary Matter' (المادة التمهيدية)، وليس 'End Matter'."
  },
  {
    "questionNumber": 3,
    "question": "يجب ألا تحمل صفحة عنوان تقارير الكتابة الفنية شهر وسنة التقرير.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "تنص المحاضرة على أن صفحة العنوان 'should also carry the month and year of the report'."
  },
  {
    "questionNumber": 4,
    "question": "مكونات تقارير الكتابة الفنية مدرجة في جميع الأنواع.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "المعلومات غير متوفرة بشكل مباشر، لكن هيكل التقارير يختلف حسب النوع والطول والغرض، مما يعني أن ليس كل المكونات تكون موجودة في كل نوع. على سبيل المثال، التقرير غير الرسمي قد لا يحتوي على كل مكونات التقرير الرسمي."
  },
  {
    "questionNumber": 5,
    "question": "دليل المستخدم هو مستند يتم توفيره لمساعدة المستخدم في استخدام نظام أو منتج أو خدمة معينة بسلاسة.",
    "options": ["صحيح", "خطأ"],
    "correct": 0,
    "explanation": "هذا يتوافق مع تعريف الكتابة التقنية التي تقدم إرشادات ، والأدلة مثل 'Instruction manuals' هي أمثلة على ذلك."
  },
  {
    "questionNumber": 6,
    "question": "تحتوي المذكرة عادةً على إرشادات خطوة بخطوة توجه المستخدمين خلال كيفية استخدام منتجك واستكشاف الأخطاء وإصلاحها المحتملة في حالة حدوث خطأ ما.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "هذا الوصف ينطبق على 'دليل التعليمات' (instruction manual)  وليس المذكرة (memo) التي هي مراسلات داخلية موجزة."
  },
  {
    "questionNumber": 7,
    "question": "أحد جوانب التحضير للعرض التقديمي هو معرفة جمهورك وما يجب تضمينه في المحتوى.",
    "options": ["صحيح", "خطأ"],
    "correct": 0,
    "explanation": "تعتبر معرفة الجمهور أمرًا أساسيًا في التواصل التقني لتكييف المعلومات مع احتياجاتهم ومستوى فهمهم."
  },
  {
    "questionNumber": 8,
    "question": "كل أنواع التقارير تحتوي على نفس الهيكل.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "تصنف التقارير حسب الشكل والطول والنوع، مما يعني أن هيكلها يختلف. على سبيل المثال، التقرير الرسمي يختلف عن غير الرسمي."
  },
  {
    "questionNumber": 9,
    "question": "السير الذاتية ذات الترتيب الزمني العكسي أكثر شيوعًا للأفراد الأكبر سنًا الذين يغيرون وظائفهم أو مجالاتهم المهنية.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "السير الذاتية الوظيفية (Functional resumés) هي الأكثر شيوعًا لهذه الفئة، وليس ذات الترتيب الزمني العكسي."
  },
  {
    "questionNumber": 10,
    "question": "يرمز الحرف 'V' في العروض التقديمية إلى التخطيط والتفكير.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "لا توجد معلومات في الملفات المرفقة تربط الحرف 'V' في العروض التقديمية بالتخطيط والتفكير."
  },
  {
    "questionNumber": 11,
    "question": "لتحضير مادة للعرض التقديمي، يجب أن تفكر في تخصيص حوالي 65% من الوقت المسموح به للنص.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "هذه المعلومة المحددة حول تخصيص الوقت غير موجودة في ملفات PDF المقدمة."
  },
  {
    "questionNumber": 12,
    "question": "أحد معايير PowerPoint هو استخدام اللون الأحمر أو الأخضر للنص.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "لا توجد معلومات في الملفات المقدمة تحدد استخدام اللون الأحمر أو الأخضر كمعيار في عروض PowerPoint."
  },
  {
    "questionNumber": 13,
    "question": "يفضل استخدام الرسومات بدلاً من التفاصيل في عرض PowerPoint.",
    "options": ["صحيح", "خطأ"],
    "correct": 0,
    "explanation": "تستخدم الكتابة التقنية العناصر المرئية مثل الرسوم البيانية والصور لتوضيح المفاهيم المكتوبة ، وهذا المبدأ ينطبق على العروض التقديمية لزيادة الوضوح."
  },
  {
    "questionNumber": 15,
    "question": "في الـ 3 V's للتواصل، تعد المرئيات (visuals) ذات أهمية قصوى.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "لا توجد معلومات حول '3 V's of Communication' في الملفات المقدمة لتأكيد أو نفي هذه العبارة."
  },
  {
    "questionNumber": 16,
    "question": "عادةً ما توجه أدلة المستخدم القراء بشكل أقل تركيزًا من أدلة المستخدم.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "العبارة متناقضة وغير منطقية. من المفترض أن أدلة المستخدم مصممة لتوجيه القراء بشكل فعال."
  },
  {
    "questionNumber": 17,
    "question": "عند كتابة مقترح، يمكنك شحن الإجراء أو المنهجية لأنها اختيارية.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "قسم الإجراء / المنهجية هو 'قلب المقترح' (the heart of the proposal) وهو ضروري لإقناع القارئ."
  },
  {
    "questionNumber": 18,
    "question": "في صفحة عنوان المقترح، يجب أن يحتوي الملخص على الموضوع والمنهجية واسم (أسماء) المؤلف (المؤلفين).",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "يتم وضع هذه المعلومات في صفحة العنوان والملخص كأقسام منفصلة، وليس الملخص داخل صفحة العنوان."
  },
  {
    "questionNumber": 19,
    "question": "يجب أن يكون ملخص المقترح مفصلاً حول الموضوع.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "الملخص يجب أن يكون 'بيانًا موجزًا' (a brief statement) من ثلاث أو أربع جمل فقط."
  },
  {
    "questionNumber": 20,
    "question": "عادة ما تستشهد المراجع بالحواشي أو قائمة المراجع.",
    "options": ["صحيح", "خطأ"],
    "correct": 0,
    "explanation": "يتكون قسم المراجع عادةً من الحواشي وقائمة المراجع (bibliography)."
  },
  {
    "questionNumber": 21,
    "question": "عند كتابة التعليمات في دليل المستخدم، يجب عليك تقسيم التعليمات إلى خطوات متسلسلة بدلاً من تقديمها كقائمة مرقمة.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "يتم تقديم التعليمات عادةً في شكل خطوات منطقية ومتسلسلة، وغالبًا ما تكون في قائمة مرقمة أو منقطة للمساعدة في التنقل."
  },
  {
    "questionNumber": 22,
    "question": "يجب أن تخبر الجمهور بتفاصيل النقاط الرئيسية خلال افتتاح العرض التقديمي.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "يجب أن تقدم المقدمة نظرة عامة، بينما تأتي التفاصيل في متن العرض. تزويد الجمهور بكل التفاصيل في البداية يمكن أن يكون مربكًا."
  },
  {
    "questionNumber": 23,
    "question": "إحدى المهارات الجيدة في العرض التقديمي هي تجنب الاتصال البصري.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "هذه المعلومة تتعارض مع ممارسات العرض التقديمي الفعالة القياسية، والتي تعتبر الاتصال البصري فيها أمرًا بالغ الأهمية."
  },
  {
    "questionNumber": 24,
    "question": "تستخدم الكلمة الثالثة 'And-so' نفس معنى 'Thus'.",
    "options": ["صحيح", "خطأ"],
    "correct": 0,
    "explanation": "من حيث المعنى العام، كلاهما يستخدم للإشارة إلى نتيجة أو استنتاج."
  },
  {
    "questionNumber": 25,
    "question": "ملخص السيرة الذاتية هو فقرة من 2-3 جمل تعطي للقائمين بالتوظيف لمحة عن خبرتك ذات الصلة وتتباهى بإنجازاتك في هذا المجال.",
    "options": ["صحيح", "خطأ"],
    "correct": 0,
    "explanation": "هذا هو التعريف الدقيق المقدم في المحاضرة لملخص السيرة الذاتية."
  },
  {
    "questionNumber": 26,
    "question": "لإنشاء سيرة ذاتية ATS-friendly، يجب أن نتجاهل الوصف الوظيفي ونبحث عن الكلمات الرئيسية المتعلقة بمسؤولياتك.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "على العكس، يجب عليك 'الرجوع إلى الوصف الوظيفي والبحث عن الكلمات الرئيسية للسيرة الذاتية' (refer to the job description and look for resume keywords) لإنشاء سيرة ذاتية صديقة لـ ATS."
  },
  {
    "questionNumber": 27,
    "question": "تستبدل المذكرات المكونات الأساسية الثمانية للخطاب بأربعة مكونات.",
    "options": ["صحيح", "خطأ"],
    "correct": 0,
    "explanation": "تستبدل المذكرات المكونات الأساسية الثمانية للخطاب بأسطر التعريف التالية: التاريخ، إلى، من، الموضوع."
  },
  {
    "questionNumber": 28,
    "question": "البريد الإلكتروني مشابه للمذكرات في أنهما يستخدمان التاريخ.",
    "options": ["صحيح", "خطأ"],
    "correct": 0,
    "explanation": "البريد الإلكتروني مشابه للمذكرات في أن كلاهما يستخدم أسطر التعريف (التاريخ، إلى، من، والموضوع)."
  },
  {
    "questionNumber": 29,
    "question": "يمكن تصنيف التقارير الفنية حسب درجة الرسمية كإنذار، أو خطاب، أو تخطيطي، أو مختلط.",
    "options": ["صحيح", "خطأ"],
    "correct": 1,
    "explanation": "هذا هو التصنيف حسب 'الشكل' (Format)، وليس 'درجة الرسمية' (Degree of formality) التي هي رسمية وغير رسمية."
  },
  {
    "questionNumber": 30,
    "question": "تقرير الرحلة الميدانية يكتبه مهندس أو تقني عاد لتوه من مهمة ميدانية.",
    "options": ["صحيح", "خطأ"],
    "correct": 0,
    "explanation": "يتم تعريف تقرير الرحلة الميدانية على أنه 'as is written by an engineer, agricultural specialist, or technologist just back from a field assignment'."
  }
  [
  {
    "questionNumber": 31,
    "question": "إذا كان المرشح يبحث عن وظيفة مماثلة لمناصبه السابقة، يمكنه كتابة سيرة ذاتية...",
    "options": ["ذات ترتيب زمني عكسي", "وظيفية", "مختلطة", "تقنية"],
    "correct": 0,
    "explanation": "السيرة الذاتية ذات الترتيب الزمني العكسي مثالية لـ 'المرشحين الذين يبحثون عن وظيفة مماثلة لمناصبهم السابقة' (Candidates seeking a job similar to their previous positions)."
  },
  {
    "questionNumber": 32,
    "question": "ما هي الدراسات أو التقنيات ذات الصلة التي يجب إتقانها لمشروعك؟ في أي قسم من مقترح المشروع يجب طرح هذا السؤال؟",
    "options": ["المقدمة", "مراجعة الأدبيات (أو الخلفية)", "الإجراء أو المنهجية", "جميع ما سبق"],
    "correct": 1,
    "explanation": "تحت قسم 'مراجعة الأدبيات (أو الخلفية)'، أحد الأسئلة الجيدة للإجابة عليها هو 'What relevant kinds of studies or techniques need to be mastered to do your project?'."
  },
  {
    "questionNumber": 33,
    "question": "تستخدم طريقة 'most cleaver' لعمل أي نوع من الجمل؟",
    "options": ["دقيقة", "صحيحة نحوياً", "طويلة", "قصيرة"],
    "correct": 3,
    "explanation": "على الرغم من أن عبارة 'most cleaver' تبدو خطأ إملائياً في السؤال، إلا أن مبادئ الكتابة التقنية تشدد على استخدام 'short sentences and paragraphs' (جمل وفقرات قصيرة)  و 'Keep sentences short' (اجعل الجمل قصيرة)."
  },
  {
    "questionNumber": 34,
    "question": "أي صفتين تصفان المذكرة بشكل أفضل؟",
    "options": ["طويلة ومعمقة", "قصيرة وموجزة", "مفصلة ورسمية", "مطولة وناجحة"],
    "correct": 1,
    "explanation": "توصف المذكرة بأنها 'Short and direct format' (تنسيق قصير ومباشر)."
  },
  {
    "questionNumber": 35,
    "question": "كيف نخاطب المستلم عند كتابة خطاب غير رسمي؟",
    "options": ["سيدي العزيز/سيدتي العزيزة", "عزيزي السيد/السيدة،", "عزيزي/عزيزتي،", "عزيزي"],
    "correct": 2,
    "explanation": "تستخدم الصيغ الرسمية مثل 'Dear Sir/Madam' في السياقات الرسمية. 'Dear' متبوعًا بالاسم الأول أو لقب أقل رسمية."
  },
  {
    "questionNumber": 36,
    "question": "ماذا تقول في الجزء الافتتاحي من الخطاب؟",
    "options": ["اسأل كيف هو الطقس في مدينة المستلم.", "اسأل كيف حال المستلم ولماذا تكتب الخطاب.", "مناقشة كيف أن المستلم مدين لك.", "مناقشة مدى روعة مدينتك."],
    "correct": 1,
    "explanation": "تتطلب مقدمة الخطاب الفعال تقديم نفسك والغرض من الكتابة بوضوح، كما هو موضح في مكونات خطاب الاستفسار."
  },
  {
    "questionNumber": 37,
    "question": "في الكتابة الفنية، يتم تعريف وجهة المذكرة بأنها؟",
    "options": ["شركة خارجية", "خارج المدينة", "من خلال البريد الإلكتروني للشركة", "داخل الشركة"],
    "correct": 3,
    "explanation": "المذكرات هي 'internal correspondence' (مراسلات داخلية)، مكتوبة من قبل موظفين إلى موظفين آخرين في نفس الشركة."
  },
  {
    "questionNumber": 38,
    "question": "أي من التالي هو خطاب يوضح للقراء ما يتلقونه، ويسمى عادة؟",
    "options": ["خطابات الشكوى", "خطابات التغطية", "النشرات الإخبارية الجيدة", "الخطابات الرسمية"],
    "correct": 1,
    "explanation": "خطاب التغطية (أو خطاب طلب الوظيفة) يشرح لصاحب العمل ما يتلقاه (سيرتك الذاتية) ولماذا يجب اختياره."
  },
  {
    "questionNumber": 39,
    "question": "أي من التقارير التالية هو مثال على تقرير خاص؟",
    "options": ["تقرير يلخص تفاصيل ندوة حديثة.", "تقرير يوضح إجراءات الشركة الجديدة لإصابات مكان العمل.", "تقرير يوضح مخصصات ميزانية الدولة للتعليم.", "تقرير يقدم بيانات أو نتائج وتحليلات واستنتاجات."],
    "correct": 1,
    "explanation": "التقارير الخاصة أو الظرفية (Occasional reports)  مثل تقرير الحادثة (Occurrence report)  أو تقرير التحقيق (Investigation report)  ستوضح إجراءات أو نتائج محددة، مما يجعل الخيار (ب) هو الأنسب."
  },
  {
    "questionNumber": 40,
    "question": "للتواصل بشكل أكثر فعالية مع القراء متعددي الثقافات، يجب عليك؟",
    "options": ["استخدام التعليمات والمفاهيم الفنية وشرح المصطلحات البيئية.", "تجنب المصطلحات إلا إذا كنت تعرف أن القراء على دراية بها.", "استخدام المصطلحات العامية واللغة غير الرسمية.", "لا شيء مما سبق."],
    "correct": 1,
    "explanation": "تنص المبادئ التوجيهية على: 'Avoid jargon unless you know your readers are familiar with it' (تجنب المصطلحات إلا إذا كنت تعرف أن القراء على دراية بها)."
  },
  {
    "questionNumber": 41,
    "question": "رسالة سيتم إرسالها إلى شخص ما داخل المنظمة ستكون بتنسيق؟",
    "options": ["مذكرة", "مطبوعة مسبقاً", "خطاب", "لا شيء"],
    "correct": 0,
    "explanation": "المذكرات (Memos) هي مراسلات داخلية، تُكتب من قبل الموظفين في شركة إلى الموظفين في نفس الشركة."
  },
  {
    "questionNumber": 42,
    "question": "عند إرسال سيرتهم الذاتية، يجب على المتقدمين للوظائف إرسال خطاب تغطية؟",
    "options": ["قبل", "بعد", "متى", "متى"],
    "correct": 1,
    "explanation": "خطاب طلب الوظيفة (خطاب التغطية) يجب 'إرساله أو تحميله مع سيرتك الذاتية' (be sent or uploaded with your resume)."
  },
  {
    "questionNumber": 43,
    "question": "أي خطاب هو مطالبة بالتعويض؟",
    "options": ["خطاب توصية", "خطاب تقدير", "خطاب تسوية", "خطاب تحديد طلبية"],
    "correct": 2,
    "explanation": "خطاب التسوية (Adjustment Letter) يُكتب ردًا على شكوى ويهدف إلى 'تقديم تعويض' (offer reparation) عن الإجراءات."
  },
  {
    "questionNumber": 44,
    "question": "متى يكون الخطاب رسميًا؟",
    "options": [],
    "correct": null,
    "explanation": "السؤال غير مكتمل في الصورة."
  },
  {
    "questionNumber": 45,
    "question": "تهدف الكتابة الفنية إلى التواصل مع ... معين من أجل ... معين.",
    "options": ["منتج، تقرير", "جمهور، غرض", "شخص، رسالة", "مجموعة، تحدي"],
    "correct": 1,
    "explanation": "التواصل التقني هو إيصال المعلومات الفنية للقراء (الجمهور) بطريقة تتكيف مع احتياجاتهم ، ويهدف إلى تحقيق غرض محدد (إعلام، إرشاد، إقناع)."
  },
  {
    "questionNumber": 46,
    "question": "الوضوح والإيجاز والمكونات الرئيسية للكتابة الفنية الفعالة.",
    "options": ["مفهومة", "معقدة"],
    "correct": 0,
    "explanation": "الوضوح والإيجاز من الميزات الأساسية للكتابة الفنية، مما يجعلها سهلة الفهم. (السؤال غير مكتمل في الصورة، لكن هذا هو الاستنتاج المنطقي)."
  },
  {
    "questionNumber": 47,
    "question": "في الكتابة الفنية، يجب أن تكون الجملة؟",
    "options": ["20 كلمة", "أقل من 20 كلمة"],
    "correct": 1,
    "explanation": "القاعدة العامة هي أن 'الجمل عادة ما تكون 15-20 كلمة' (Sentences are usually 15-20 words) ، مما يعني أن 'أقل من 20 كلمة' هو الخيار الأدق."
  },
  {
    "questionNumber": 48,
    "question": "أي من المهام التالية يؤديها كل من السيرة الذاتية وخطاب طلب الوظيفة؟",
    "options": ["مهمتان", "نفس المهمة"],
    "correct": 0,
    "explanation": "السيرة الذاتية تقدم تاريخًا موجزًا للخبرة، بينما يشرح خطاب طلب الوظيفة سبب كونك مؤهلاً. لذلك، هما يكملان بعضهما البعض ولكنهما يؤديان مهام مختلفة قليلاً لتحقيق هدف مشترك."
  },
  {
    "questionNumber": 49,
    "question": "تقرير موجز عن توزيع وتصرف الموظفين خلال فترة معينة.",
    "options": ["تقرير الموظفين", "تقرير المراجعة"],
    "correct": 0,
    "explanation": "تقرير الموظفين (staff report) 'يعطي حسابًا موجزًا عن توزيع وتصرف الموظفين خلال فترة معينة'."
  },
  {
    "questionNumber": 50,
    "question": "أي من التقارير التالية متشابهة، ولكن ليست متطابقة تمامًا؟",
    "options": ["تقارير الجدوى والتحقيق", "تقارير الجدوى والحوادث"],
    "correct": 0,
    "explanation": "كلا من تقرير الجدوى وتقرير التحقيق يتضمنان فحصًا وتحليلاً، ولكنهما يختلفان في الغرض. تقرير الجدوى يقيّم فكرة مستقبلية ، بينما يفحص تقرير التحقيق بيانات أو اختبارات."
  },
  {
    "questionNumber": 51,
    "question": "أي مما يلي هي خصائص التقارير الفنية؟",
    "options": ["الدقة والاتساق والوضوح", "الإيجاز، تقديم التقارير بالتفصيل، والإقناع", "الدقة الميكانيكية، الوضوح، والصوت السلبي"],
    "correct": 0,
    "explanation": "الدقة والوضوح والإيجاز والمنطق كلها سمات أساسية للكتابة الفنية والتقارير. الخيار (أ) هو الأنسب."
  },
  {
    "questionNumber": 52,
    "question": "البريد الإلكتروني مشابه للمذكرات في؟",
    "options": ["كلاهما يستخدم أسطر التعريف", "كلاهما يستخدم (التاريخ، التوقيع، والموضوع)", "كلاهما مراسلات خارجية"],
    "correct": 0,
    "explanation": "البريد الإلكتروني مشابه للمذكرات في أن كلاهما يستخدم أسطر التعريف (التاريخ، إلى، من، والموضوع)."
  },
  {
    "questionNumber": 53,
    "question": "يعتبر التعبير المكتوب؟",
    "options": ["دلالي وتعبيري", "موضوعي"],
    "correct": 0,
    "explanation": "الكتابة التعبيرية (Expressive Writing) هي 'ذاتية، تستند إلى تجربة شخصية، وتستخدم كلمات دلالية وتعبيرية'."
  },
  {
    "questionNumber": 54,
    "question": "أي من الأسطر التالية للمقترح يخبر القارئ كيف تقترح تنفيذ مشروعك؟",
    "options": ["المقدمة", "مراجعة الأدبيات (أو الخلفية)", "الإجراء (أو المنهجية)", "الميزانية"],
    "correct": 2,
    "explanation": "الإجراء أو المنهجية 'هو قلب المقترح لأنه يجب أن يخبر القارئ كيف تقترح تنفيذ مشروعك'."
  },
  {
    "questionNumber": 55,
    "question": "في أي من التقارير التالية: تبدأ بالفكرة التي سيتم تطويرها؟",
    "options": ["تقرير حادثة", "تقرير جدوى", "تقرير تحقيق", "تقرير تقييم"],
    "correct": 3,
    "explanation": "في تقرير التقييم 'تبدأ بالفكرة التي سيتم تطويرها (تقييمها)'."
  },
  {
    "questionNumber": 56,
    "question": "نظرية النسبية لآينشتاين القائلة بأن ... قابلة للاختزال إلى خمسة رموز، هذا يمكن أن يكون مثالاً على ... في الكتابة الفنية.",
    "options": ["وضوح", "دقة", "إيجاز"],
    "correct": 2,
    "explanation": "اختزال فكرة معقدة إلى شكل بسيط ومختصر هو مثال رئيسي على الإيجاز (Conciseness)."
  },
  {
    "questionNumber": 57,
    "question": "ما الذي ترمز إليه الـ 3 V's للتواصل؟",
    "options": ["صوت، لفظي، وسرعة", "صوت، لفظي، وبصري", "حجم، سرعة، وتنوع"],
    "correct": null,
    "explanation": "المعلومات حول '3 V's of Communication' غير موجودة في أي من ملفات PDF المقدمة."
  },
  {
    "questionNumber": 58,
    "question": "عند مراجعة مستند تقني، من الضروري؟",
    "options": ["التركيز فقط على القواعد والآليات", "ضمان الوضوح، الدقة، والتدفق المنطقي للمعلومات", "كتابة جمل معقدة بغض النظر عن الوضوح"],
    "correct": 1,
    "explanation": "تتطلب الكتابة التقنية الفعالة أن تكون واضحة ودقيقة ومنظمة منطقياً وسهلة الوصول إليها."
  },
  {
    "questionNumber": 59,
    "question": "أي مما يلي ليس سمة أساسية للكتابة الفنية الفعالة؟",
    "options": ["الوضوح والإيجاز", "التنظيم المنطقي", "هيكل الجملة المعقد", "دقة المعلومات"],
    "correct": 2,
    "explanation": "الكتابة التقنية الفعالة تتميز بجمل وفقرات قصيرة، وليس بهياكل جمل معقدة."
  },
  {
    "questionNumber": 60,
    "question": "عند الكتابة لجمهور تقني، من المهم؟",
    "options": ["استخدام مصطلحات غامضة وغير رسمية", "تحديد المصطلحات الفنية واستخدام المصطلحات بشكل مناسب", "افتراض أن القارئ لديه معرفة متعمقة بالموضوع", "الكتابة بنبرة حوارية وغير رسمية"],
    "correct": 1,
    "explanation": "يجب تجنب المصطلحات إلا إذا كنت تعرف أن القراء على دراية بها ، أو شرحها إذا لزم الأمر، مما يجعل الخيار (ب) هو الممارسة الأفضل."
  }
]
]


};

// Create a mapping between English and Arabic chapter names
const chapterMapping = {
  // Add your English to Arabic mappings here.
  // IMPORTANT: The LEFT side (English) MUST EXACTLY match the keys in your `quizData`.
  // The RIGHT side (Arabic) MUST EXACTLY match the keys in your `quizDataArabic`.

  'Chapter 1: Introduction to Technical Writing': 'الفصل الأول: مقدمة في الكتابة التقنية',
  'Chapter 2: Components of a Technical Report': 'الفصل الثاني: مكونات التقرير الفني',
  'Chapter 3: Applications in Technical Writing - Letters': 'الفصل الثالث: تطبيقات في الكتابة الفنية - الخطابات',
  'Chapter 4: Memos and Emails': 'الفصل الرابع: المذكرات ورسائل البريد الإلكتروني',
  'Chapter 5: Resumes': 'الفصل الخامس: السير الذاتية',
  'Chapter 6: Technical Proposal': 'الفصل السادس: المقترح الفني',
  'final exam 2023-2024': 'امتحان سابق 2023-2024'




};

// Reverse mapping (Arabic to English)
const reverseChapterMapping = {};
Object.keys(chapterMapping).forEach(englishName => {
  reverseChapterMapping[chapterMapping[englishName]] = englishName;
});

export { quizData, quizDataArabic, chapterMapping, reverseChapterMapping };
