import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "idnumber1",
      label: "What is ReactJS?",
      content:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. ",
    },
    {
      id: "idnumber2",
      label: "What is HTML?",
      content:
        "HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
    },
    {
      id: "idnumber3",
      label: "What is  CSS?",
      content:
        "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    },
  ];
  document.title = "Accordion";

  return (
    <div>
      <h2 className="text-xl font-bold m-1">Reusable Accordion component</h2>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
