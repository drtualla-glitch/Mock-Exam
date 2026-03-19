const QUESTION_LIMIT = 50;
const EXAM_TIME = 2700; // seconds

const allQuestions = [
// 1
{
question:"The classification of cells into prokaryotic and eukaryotic is based on:",
answers:[
{ text:"Cellular organization and biochemistry",correct:true},
{ text:"Shape",correct:false},
{ text:"Size",correct:false},
{ text:"Staining Reaction",correct:false},
{ text:"Motility",correct:false}
],	
explanation:"All living organisms on earth are composed of one or the other of two types of cells prokaryotic cells and eukaryotic cells based on differences in cellular organization and biochemistry." 
},
// 2
{
question:"What is microbiology the study of?",
answers:[
{ text:"Living organism with microscopic size",correct:true },
{ text:"Large animals",correct:false },
{ text:"chemical reactions",correct:false },
{ text:"Plant Biology",correct:false },
{ text:"Human Anatomy",correct:false }
],
 explanation:"Microbiology is the study of living organisms of microscopic size."
},
// 3
{
question:"Medical microbiology primarily deals with:",
answers:[
{ text:"Infectious diseases of humans and their diagnosis, treatment, and prevention",correct:true },
{ text:"Plant diseases",correct:false },
{ text:"Animal behavior",correct:false },
{ text:"Genetic engineering",correct:false },
{ text:"Environmental microbiology",correct:false }
], 
explanation:"Medical microbiology is the subdivision concerned with the causative agents of infectious disease of man, the response of the host to infection and various methods of diagnosis, treatment and prevention."
},
// 4
{
question:"Who was the first person to observe microorganisms using a simple microscope?",
answers:[
{ text:"Antony van Leeuwenhoek",correct:true},
{ text:"Louis Pasteur",correct:false},
{ text:"Robert Koch",correct:false},
{ text:"Edward Jenner",correct:false},
{ text:"Paul Ehrlich",correct:false}
], 
explanation:"Antony van Leeuwenhoek (1632–1723) was the first person to observe microorganisms (1673) using a simple microscope."
},
// 5
{
question:"Louis Pasteur is known as the:",
answers:[
{ text:"Father of Microbiology",correct:true},
{ text:"Father of Chemotherapy",correct:false},
{ text:"Father of Genetics",correct:false},
{ text:"Father of Immunology",correct:false},
{ text:"Father of Bacteriology",correct:false}
], explanation:"Louis Pasteur is known as “Father of Microbiology” because his contribution led to the development of Microbiology as a separate scientific discipline."
},
// 6
{
question:"Antony van Leeuwenhoek is credited with all of the following EXCEPT:",
answers:[
{ text:"Discovering the gonococcus",correct:true},
{ text:"Picturing bacterial arrangements in infected material",correct:false},
{ text:"Constructing the first microscope",correct:false},
{ text:"Describing different shapes of bacteria",correct:false},
{ text:"First observing microorganisms",correct:false}
], explanation:"Contributions of Antony van Leeuwenhoek 1. He constructed the first microscope. 2. The first person to observe microorganisms. 3. Provided accurate description of bacteria. 4. described the different shapes of bacteria (coccal, bacillary and spiral). 5. pictured their arrangement in infected material"
},
// 7
{
question:"Robert Koch is famously known as the:",
answers:[
{ text:"Father of Bacteriology",correct:true},
{ text:"Father of Microbiology",correct:false},
{ text:"Father of Chemistry",correct:false},
{ text:"Father of Virology",correct:false},
{ text:"Father of Immunology",correct:false}
], explanation:"Robert Koch (1843–1910). Winner of the Nobel Prize in 1905, Robert Koch is known as “Father of bacteriology”."
},
// 8
{
question:"Which scientist described the leprosy bacillus in 1874?",
answers:[
{ text:"Hansen",correct:true},
{ text:"Eberth",correct:false},
{ text:"Loeffler",correct:false},
{ text:"Rosenbach",correct:false},
{ text:"Neisser",correct:false }
], explanation:"Hansen (1874) described the leprosy bacillus."
},
// 9
{
question:"Who discovered the gonococcus in pus discharge from the urethra?",
answers:[
{ text:"Hansen",correct:false},
{ text:"Eberth",correct:false},
{ text:"Alexander",correct:false},
{ text:"Ogston",correct:false},
{ text:"Neisser",correct:true}
], explanation:"Neisser (1879) discovered the gonococcus in the pus dischage from urethra;"
},
// 10
{
question:"Paul Ehrlich is known as the:",
answers:[
{ text:"Father of Bacteriology",correct:false},
{ text:"Father of Microbiology",correct:false},
{ text:"Father of Chemotherapy",correct:true},
{ text:"Father of Virology",correct:false},
{ text:"Father of Immunology",correct:false}
], explanation:"Paul Ehrlich (1854–1915) an outstanding German Scientist and genius of extraordinary activity also known as “Father of chemotherapy”."
},
// 11
{
question:"Which of the following is NOT a contribution of Paul Ehrlich?",
answers:[
{ text:"Proposing the side chain theory of antibody production ",correct:false},
{ text:"Applying stains to cells and tissues",correct:false},
{ text:"Discovering penicillin",correct:true},
{ text:"Reporting acid-fastness of tubercle bacillus",correct:false},
{ text:"Introducing salvarsan to treat syphilis",correct:false}
], explanation:"Contributions of Paul Ehrlich 1. Stains to cells and tissues: He applied stains to cells and tissues for the purpose of revealing their function. 2. Acid-fastness of tubercle bacillus: He reported the acid-fastness of tubercle bacillus. 3. Introduced methods of standardizing toxin and antitoxin. 4. Proposed side chain theory of antibody production. 5. Salvarsan introduction: He introduced salvarsan, an arsenical compound, sometimes called the ‘magic bullet’."
},
// 12
{
question:"Sir Alexander Fleming discovered that Penicillium notatum produces a substance that:",
answers:[
{ text:"Causes leprosy",correct:false},
{ text:"Causes tuberculosis",correct:false},
{ text:"Destroys staphylococci",correct:true},
{ text:"Causes malaria",correct:false},
{ text:"Produces toxins",correct:false}
], explanation:"Sir Alexander Fleming (1881–1955) made accidental discovery that the fungus Penicillium notatum produces a substance, which destroys staphylococci."
},
// 13
{
question:"Edward Jenner is known as the:",
answers:[
{ text:"Father of Chemotherapy",correct:false},
{ text:"Father of Bacteriology",correct:false},
{ text:"Father of Immunology",correct:true},
{ text:"Father of Virology",correct:false},
{ text:"Father of Microbiology",correct:false}
], explanation:"Edward Jenner is known as the “Father of Immunology”."
},
// 14
{
question:"Which scientist introduced the concept of the ‘magic bullet’ in chemotherapy?",
answers:[
{ text:"Robert Koch",correct:false},
{ text:"Louis Pasteur",correct:false},
{ text:"Paul Ehrlich",correct:true},
{ text:"Alexander Fleming",correct:false},
{ text:"Edward Jenner",correct:false}
], explanation:"Paul Ehrlich introduced salvarsan, an arsenical compound, sometimes called the ‘magic bullet’. It was capable of destroying the spirochete of syphilis."
},
// 15
{
question:"Who observed and described the diphtheria bacillus in 1884?",
answers:[
{ text:"Eberth", correct:false },
{ text:"Rosenbach", correct:false },
{ text:"Loefller", correct:true },
{ text:"Fraenkel", correct:false },
{ text:"Nikolaier", correct:false }
], explanation:"Loeffler (1884) observed and described the diphtheria bacillus."
},
// 16
{
question:"The discovery of the causative agent of Malta fever was made by:",
answers:[
{ text:"Weichselbakum", correct:false },
{ text:"Schaudin and Hoffman", correct:false },
{ text:"Bruce", correct:true },
{ text:"Hansen", correct:false },
{ text:"Neisser", correct:false }
], explanation:"In 1887 Bruce identified the causative agent of malta fever."
},
// 17
{
question:"What shapes of bacteria did Antony van Leeuwenhoek describe?",
answers:[
{ text:"Oval, square, and triangular", correct:false },
{ text:"Spiral, filamentous, and irregular", correct:false },
{ text:"Coccal, bacillary, and spiral", correct:true },
{ text:"Bacillary, filamentous, and oval", correct:false },
{ text:"Rod, filamentous, and spherical", correct:false }
], explanation:"Antony van Leeuwenhoek described the different shapes of bacteria (coccal, bacillary and spiral) and pictured their arrangement in infected material (1683)."
},
// 18
{
question:"Which scientist won the Nobel Prize in 1905 for contributions to microbiology?",
answers:[
{ text:"Edward Jenner", correct:false },
{ text:"Spiral, filamentous, and irregular", correct:false },
{ text:"Robert Koch", correct:true },
{ text:"Paul Ehrlich", correct:false },
{ text:"Alexander Fleming", correct:false }
], explanation:"Robert Koch (1843–1910). Winner of the Nobel Prize in 1905, Robert Koch is known as “Father of bacteriology”."
},
// 19
{
question:"Who demonstrated the tetanus bacillus with a round terminal spore?",
answers:[
{ text:"Edward Jenner", correct:false },
{ text:"Eberth", correct:false },
{ text:"Rosenbach", correct:true },
{ text:"Fraenkel", correct:false },
{ text:"Loeffler", correct:false }
], explanation:"Rosenbach (in 1886) demonstrated the tetanus bacillus with round terminal spore. Nicolaier (1884) observed the tetanus bacillus in soil"
},
// 20
{
question:"The meningococcus was described and isolated from spinal fluid by:",
answers:[
{ text:"Schaudin", correct:false },
{ text:"Bruce", correct:false },
{ text:"Weichselbakum", correct:true },
{ text:"Hansen", correct:false },
{ text:"Neisser", correct:false }
], explanation:"In 1887 Weichselbakum described and isolated the Meningococcus from the spinal fluid of a patient."
},

// 21
{
question:"Which scientist discovered the syphilis causative agent in 1905?",
answers:[
{ text:"Loeffler and Nicolaier ", correct:false },
{ text:"Hansen and Neisser", correct:false },
{ text:"Schaudin and Hoffman", correct:true },
{ text:"Bruce and Weichselbakum", correct:false },
{ text:"Rosenbach and Fraenkel", correct:false }
], explanation:"In 1905 Schaudin and Hoffman discovered the syphilis."
},
// 22
{
question:"What was the original profession of Louis Pasteur before his microbiology contributions?",
answers:[
{ text:"Pharmacist", correct:false },
{ text:"Physicist", correct:false },
{ text:"Chemist", correct:true },
{ text:"Physician", correct:false },
{ text:"Biologist", correct:false }
], explanation:"Louis Pasteur (1822–1895). He was originally trained as a chemist, but his studies on fermentation led him to take interest in microorganisms."
},
// 23
{
question:"Which of the following is NOT true about Paul Ehrlich’s contributions?",
answers:[
{ text:"He introduced salvarsan as a treatment for syphilis", correct:false },
{ text:"He applied stains to cells and tissues", correct:false },
{ text:"He discovered penicillin", correct:true },
{ text:"He proposed the side chain theory of antibody production", correct:false },
{ text:"He standardized toxin and antitoxin methods", correct:false }
], explanation:"All of the choices are contributions of Paul Ehrlich except for the discovery of penicillin, which is discovered by Alexander Fleming"
},
// 24
{
question:"What is the significance of salvarsan introduced by Paul Ehrlich?",
answers:[
{ text:"It is a disinfectant for surgical instruments", correct:false },
{ text:"He applied stains to cells and tissues", correct:false },
{ text:"It is an arsenical compound that destroys syphilis spirochetes", correct:true },
{ text:"It is an antibiotic for pneumonia", correct:false },
{ text:"It is a stain for bacteria", correct:false }
], explanation:"Paul Ehrlich introduced salvarsan, an arsenical compound, sometimes called the ‘magic bullet’. It was capable of destroying the spirochete of syphilis."
},
// 25
{
question:"Alexander Ogston described which bacteria in abscesses and suppurative lesions?",
answers:[
{ text:"Meningococci", correct:false },
{ text:"Streptococci", correct:false },
{ text:"Staphylococci", correct:true },
{ text:"Pneumococci", correct:false },
{ text:"Gonococci", correct:false }
], explanation:"Alexander Ogston (1881) described the staphylococci in abscess and suppurative lesions"
},
// 26
{
question:"Which scientist is credited with observing the typhoid bacillus?",
answers:[
{ text:"Hansen", correct:false },
{ text:"Neisser", correct:false },
{ text:"Eberth", correct:true },
{ text:"Loefller", correct:false },
{ text:"Rosenbach", correct:false }
], explanation:"Eberth (1880) observed the typhoid bacillus."
},
// 27
{
question:"What branch of medicine did Paul Ehrlich help create?",
answers:[
{ text:"Immunology", correct:false },
{ text:"Chemotherapy", correct:true },
{ text:"Virology", correct:false },
{ text:"Pathology", correct:false },
{ text:"Pharmacology", correct:false }
], explanation:"Ehrlich created a new branch of medicine known as chemotherapy."
},
// 28
{
question:"Which scientist is associated with the discovery of the diphtheria bacillus?",
answers:[
{ text:"Fraenkel", correct:false },
{ text:"Loeffler", correct:true },
{ text:"Rosenbach", correct:false },
{ text:"Nicolaier", correct:false },
{ text:"Bruce", correct:false }
], explanation:"Loeffler (1884) observed and described the diphtheria bacillus"
},
// 29
{
question:"The fungus Penicillium notatum produces a substance that:",
answers:[
{ text:"Causes tuberculosis", correct:false },
{ text:"Destroys staphylococci", correct:true },
{ text:"Causes leprosy", correct:false },
{ text:"Produces toxins harmful to humans", correct:false },
{ text:"Causes malaria", correct:false }
], explanation:"Sir Alexander Fleming (1881–1955) made accidental discovery that the fungus Penicillium notatum produces a substance, which destroys staphylococci."
},
// 30
{
question:"Who is known for the positive contributions of microbiology to human health?",
answers:[
{ text:"Only Louis Pasteur", correct:false },
{ text:"The entire field of microbiology", correct:true },
{ text:"Only Paul Ehrlich", correct:false },
{ text:"Only Alexander Fleming", correct:false },
{ text:"Only Robert Koch", correct:false }
], explanation:"The positive contribution has been made to human health by the science of microbiology."
},
// 31
{
question:"What did Antony van Leeuwenhoek picture in infected material?",
answers:[
{ text:"Viruses", correct:false },
{ text:"Arrangement of bacteria", correct:true },
{ text:"Fungi", correct:false },
{ text:"Parasites", correct:false },
{ text:"Blood cells", correct:false }
], explanation:"Antony va Leeuwenhoek described the different shapes of bacteria (coccal, bacillary and spiral) and pictured their arrangement in infected material (1683)."
},
// 32 MORPHOLOGY OF BACTERIA
// ==========================
{
question:"What are the two types of cells that all living organisms on earth are composed of?",
answers:[
{ text:"Animal and plant cells", correct:false },
{ text:"Prokaryotic and eukaryotic cells", correct:true },
{ text:"Bacterial and viral cells", correct:false },
{ text:"Fungal and algal cells", correct:false },
{ text:"Protozoan and fungal cells", correct:false }
], explanation:"All living organisms on earth are composed of one or the other of two types of cells prokaryotic cells and eukaryotic cells based on differences in cellular organization and biochemistry."
},
// 33
{
question:"Which of the following are prokaryotes?",
answers:[
{ text:"Fungi and protozoa", correct:false },
{ text:"Blue-green algae and bacteria", correct:true },
{ text:"Higher plants and animals", correct:false },
{ text:"Other algae (excluding blue-green algae)", correct:false },
{ text:"Slime molds and fungi", correct:false }
], explanation:"All bacteria and blue-green algae are prokaryotes. Other algae (excluding blue-green algae), fungi, slime moulds, protozoa, higher plants, and animals are eukaryotic."
},
// 34
{
question:"Which microscope is NOT commonly used for examination of bacteria?",
answers:[
{ text:"Light microscope", correct:false },
{ text:"Polarizing microscope", correct:true },
{ text:"Phase contrast microscope", correct:false },
{ text:"Dark-ground microscope", correct:false },
{ text:"Confocal microscopy", correct:false }
], explanation:"Following types of microscopes are used for examination of bacteria: i. Light microscope ii. Phase contrast microscopy iii. Dark-ground (Dark-field) microscope iv. Fluorescent microscope v. Electron microscope vi. Confocal microscopy vii. Autoradiography."
},
// 35
{
question:"What is the main purpose of unstained (wet) bacterial preparations?",
answers:[
{ text:"To stain bacterial capsules", correct:false },
{ text:"To observe bacterial motility and spirochetes", correct:true },
{ text:"To kill bacteria for examination", correct:false },
{ text:"To observe bacterial cell wall", correct:false },
{ text:"To detect bacterial toxins", correct:false }
], explanation:"Unstained preparations are examined mainly for bacterial motility (e.g. hanging drop preparation) and for demonstration of spirochetes (e.g. dark ground microscopy)."
},
// 36
{
question:"What does staining of bacteria primarily do?",
answers:[
{ text:"Kills bacteria without coloring", correct:false },
{ text:"Colors microorganisms to emphasize structures", correct:true },
{ text:"Removes bacterial capsules", correct:false },
{ text:"Makes bacteria motile", correct:false },
{ text:"Destroys bacterial DNA", correct:false }
], explanation:"Staining simply means coloring the microorganisms with a dye that emphasizes certain structures. Routine methods for staining of bacteria involve drying and fixing smears, procedures that kill them. Fixing simultaneously kills the microorganisms and attaches them to the slide."
},
// 37
{
question:"Which of the following is NOT a common staining technique?",
answers:[
{ text:"Simple stains", correct:false },
{ text:"Gram-negative staining", correct:true },
{ text:"Differential stains", correct:false },
{ text:"Special stains", correct:false },
{ text:"Negative staining", correct:false }
], explanation:"common staInIng technIques:1. Simple stains 2.	Differential stains (a.	Gram stain b.	Acid fast stain (Ziehl-Neelsen staining of acid fast bacilli))"
},
// 38
{
question:"What is a simple stain?",
answers:[
{ text:"A stain that differentiates bacteria by color", correct:false },
{ text:"A stain that colors all bacteria the same color", correct:true },
{ text:"A stain that only colors bacterial capsules", correct:false },
{ text:"A stain that kills bacteria without coloring", correct:false },
{ text:"A stain that colors only gram-positive bacteria", correct:false }
], explanation:"A simple stain is an aqueous or alcohol solution of a single basic dye. Some of the simple stains commonly used in the laboratory are methylene blue, carbolfuchsin, crystal violet, and safranin. They provide color contrast, but impart the same color to all bacteria."
},
// 39
{
question:"Which two stains are widely used as differential stains?",
answers:[
{ text:"Simple stain and negative stain", correct:false },
{ text:"Gram stain and acid-fast stain", correct:true },
{ text:"Capsule stain and endospore stain", correct:false },
{ text:"Crystal violet and safranin", correct:false },
{ text:"Methylene blue and carbol fuchsin", correct:false }
], explanation:"Gram stain and the acid-fast stain are two most widely used differential stains"
},
// 40
{
question:"What color do gram-positive bacteria appear after Gram staining?",
answers:[
{ text:"Red", correct:false },
{ text:"Violet", correct:true },
{ text:"Blue", correct:false },
{ text:"Green", correct:false },
{ text:"Yellow", correct:false }
], explanation:"Gram-positive bacteria are those that resist decolorization and retain the primary stain, appearing violet. Gram-negative: Gram-negative bacteria are decolorized by organic solvents (acetone/alcohol) and, therefore, take the counterstain, appearing red."
},
// 41
{
question:"What is the key characteristic of acid-fast bacteria?",
answers:[
{ text:"They stain red with Gram stain", correct:false },
{ text:"They resist decolorization by acids after staining", correct:true },
{ text:"They do not stain with any dye", correct:false },
{ text:"They appear green under dark-field microscopy", correct:false },
{ text:"They are always gram-negative", correct:false }
], explanation:"Acid fast stain was discovered by Ehrlich (1882), who found that after staining with aniline dyes, tubercle bacilli resist decolorization with acids. Mycobacterium tuberculosis and M. leprae are acid-fast bacteria."
},
// 42
{
question:"Which special stain is useful for demonstrating bacterial capsules?",
answers:[
{ text:"Negative staining", correct:false },
{ text:"Gram stain", correct:true },
{ text:"Acid-fast stain", correct:false },
{ text:"Simple stain", correct:false },
{ text:"Impregnation method", correct:false }
], explanation:"The Gram stain is the principal stain used for microscopic examination of bacteria. It was first devised by the histologist Hans Christian Gram (1884) as a method of staining bacteria in tissues. It is one of the most useful staining procedures."
},
// 43
{
question:"What is the shape of cocci bacteria?",
answers:[
{ text:"Rod-shaped", correct:false },
{ text:"Spiral-shaped", correct:true },
{ text:"Acid-fast stain", correct:false },
{ text:"Curved rods", correct:false },
{ text:"Filamentous", correct:false }
], explanation:"Cocci (from kokkos meaning berry) are spherical, or nearly spherical."
},
// 44
{
question:"What are bacilli?",
answers:[
{ text:"Spherical bacteria", correct:false },
{ text:"Rod-shaped bacteria", correct:true },
{ text:"Spiral bacteria", correct:false },
{ text:"Curved rods", correct:false },
{ text:"Cell wall deficient bacteria", correct:false }
], explanation:"Bacilli (from baculus meaning rod) are relatively straight, rod shaped (cylindrical) cells."
},
// 45
{
question:"What are vibrios?",
answers:[
{ text:"Rigid spiral bacteria", correct:false },
{ text:"Curved or comma-shaped rods", correct:true },
{ text:"Spiral bacteria", correct:false },
{ text:"Cell wall deficient bacteria", correct:false },
{ text:"Spherical bacteria", correct:false }
], explanation:"Vibrios are curved or comma-shaped rods and derive the name from their characteristic vibratory motility."
},
// 46
{
question:"Which bacteria are cell wall deficient and have variable morphology?",
answers:[
{ text:"Cocci", correct:false },
{ text:"Mycoplasma", correct:true },
{ text:"Bacilli", correct:false },
{ text:"Spirilla", correct:false },
{ text:"Vibrios", correct:false }
], explanation:"Mycoplasma are cell wall deficient bacteria and hence do not possess a stable morphology. They occur as round or oval bodies and interlacing filaments."
},
// 47
{
question:"What arrangement do cocci in grape-like clusters form?",
answers:[
{ text:"Diplococci", correct:false },
{ text:"Streptococci", correct:false },
{ text:"Staphylococci", correct:true },
{ text:"Tetrads", correct:false },
{ text:"Sarcina", correct:false }
], explanation:"Cocci may be arranged in pairs (diplococci); long chains (Steptococcus, Enterococcus, and Lactococcus); grape like clusters (staphylococci); square groups of four cells (tetrads) as in members of the genus Micrococcus; cubical packets of eight of cells (genus Sarcina)."
},

// 48 BACTERIAL CELL WALL COMPONENT
{
question:"What is the main component of the gram-positive bacterial cell wall?",
answers:[
{text:"Lipopolysaccharide",correct:false},
{text:"Peptidoglycan and teichoic acids",correct:true},
{text:"Outer membrane",correct:false},
{text:"Lipoprotein",correct:false},
{text:"Capsule",correct:false}
],
explanation:"In gram-positive bacteria, the cell wall consists mainly of peptidoglycan and teichoic acids. Peptidoglycan: It is thicker and stronger (more extensively crosslinked) than those of gram-negative bacteria. Teichoic acid: In addition, the cell walls of gram-positive bacteria contain teichoic acids, which is absent in gram-negative bacteria."
},
// 49
{
question:"Which component is present in gram-negative but absent in gram-positive bacterial cell walls?",
answers:[
{text:"Peptidoglycan",correct:false},
{text:"Teichoic acid",correct:false},
{text:"Lipopolysaccharide",correct:true},
{text:"Cytoplasmic membrane",correct:false},
{text:"Capsule",correct:false}
],
explanation:"Teichoic acid: In addition, the cell walls of gram-positive bacteria contain teichoic acids, which is absent in gram-negative bacteria."
},
// 50
{
question:"What is the function of the bacterial cell wall?",
answers:[
{text:"To generate ATP",correct:false},
{text:"To impart shape and rigidity to the cell",correct:true},
{text:"To synthesize proteins",correct:false},
{text:"To control movement of flagella",correct:false},
{text:"To store genetic material",correct:false}
],
explanation:"Functions of the cell wall: 1. To impart shape and rigidity to the cell. 2. It supports the weak cytoplasmic membrane against the high internal osmotic pressure of the protoplasm. 3. Maintains the characteristic shape of the bacterium. 4. It takes part in cell division. 5. Also function in interactions (e.g. adhesion) with other bacteria and with mammalian cells. 6. Provide specific protein and carbohydrate receptors for the attachment of some bacterial viruses."
},
// 51
{
question:"Which bacterial structure is responsible for locomotion in most motile bacteria?",
answers:[
{text:"Pili",correct:false},
{text:"Capsule",correct:false},
{text:"Flagella",correct:true},
{text:"Ribosomes",correct:false},
{text:"Cell wall",correct:false}
],
explanation:"Motile bacteria, except spirochetes, possess one or more unbranched, long, sinuous filaments called flagella, which are the organs of locomotion. They are long, hollow, helical filaments, usually several times the length of the cell. These are four types of flagella arrangement 1. Monotrichous: Single polar flagellum (e.g. Vibrio Cholerae) 2. Amphitrichous: Single flagellum at both ends e.g. Alkaligenes faecalis. 3. Lophotrichous: Tuft of flagella at one or both ends, e.g. Spirilla. 4. Peritrichous: Flagella surrounding the cell (e.g. Typhoid bacilli)"
},
// 52
{
question:"What type of flagella arrangement does Vibrio cholerae have?",
answers:[
{text:"Monotrichous",correct:true},
{text:"Amphitrichous",correct:false},
{text:"Lophotrichous",correct:false},
{text:"Peritrichous",correct:false},
{text:"Atrichous",correct:false}
],
explanation:"There are four types of flagella arrangement 1. Monotrichous: Single polar flagellum (e.g. Vibrio Cholerae) 2. Amphitrichous: Single flagellum at both ends e.g. Alkaligenes faecalis. 3. Lophotrichous: Tuft of flagella at one or both ends, e.g. Spirilla. 4. Peritrichous: Flagella surrounding the cell (e.g. Typhoid bacilli)"
},
// 53
{
question:"What are fimbriae or pili primarily used for?",
answers:[
{text:"Locomotion",correct:false},
{text:"Attachment to surfaces",correct:true},
{text:"Protein synthesis",correct:false},
{text:"Energy production",correct:false},
{text:"DNA replication",correct:false}
],
explanation:"Many gram-negative bacteria have short, fine, hair like surface appendages called fimbriae or pili depending on their function. They are shorter and thinner than flagella." 
},
// 54
{
question:"What is the cytoplasm of a bacterial cell composed of?",
answers:[
{text:"Only water",correct:false},
{text:"Viscous watery solution with solutes, ribosomes, and polysomes",correct:true},
{text:"Only DNA and RNA",correct:false},
{text:"Only proteins",correct:false},
{text:"Only lipids",correct:false}
],
explanation:"The cytoplasm of the bacterial cell is a viscous watery solution or soft gel, containing a variety of organic or inorganic solutes, and numerous ribosomes and polysomes. The cytoplasm may contain granules or inclusions."
},
// 55
{
question:"What are mesosomes in bacteria?",
answers:[
{text:"DNA molecules",correct:false},
{text:"Convoluted membranous bodies formed by invagination of the plasma membrane",correct:true},
{text:"Ribosomes",correct:false},
{text:"Flagella",correct:false},
{text:"Capsules",correct:false}
],
explanation:"Mesosomes (chondroids)are convoluted or multilaminated membranous bodies formed as invaginations of the plasma mem brane into the cytoplasm."
},
// 56 ADVANCED AND MASTERY (BACTERIAL MORPHOLOGY)
// =============================================
{
question:"The classification of cells into prokaryotic and eukaryotic is based on:",
answers:[
{text:"Shape",correct:false},
{text:"Size",correct:false},
{text:"Cellular organization and biochemistry",correct:true},
{text:"Motility",correct:false},
{text:"Staining reaction",correct:false}
],
explanation:"All living organisms on earth are composed of one or the other of two types of cells prokaryotic cells and eukaryotic cells based on differences in cellular organization and biochemistry."
},
// 57
{
question:"Which group is entirely prokaryotic?",
answers:[
{text:"Protozoa",correct:false},
{text:"Fungi",correct:false},
{text:"Higher plants",correct:false},
{text:"Bacteria",correct:true},
{text:"Slime Moulds",correct:false}
],
explanation:"All bacteria and blue-green algae are prokaryotes. "
},
// 58
{
question:"Blue-green algae are examples of:",
answers:[
{text:"True algae",correct:false},
{text:"Eukaryotes",correct:false},
{text:"Prokaryotes",correct:true},
{text:"Fungi",correct:false},
{text:"Protozoa",correct:false}
],
explanation:"All bacteria and blue-green algae are prokaryotes. "
},
// 59
{
question:"Phase contrast microscopy is useful for:",
answers:[
{text:"Gram reaction",correct:false},
{text:"Observing live organisms",correct:true},
{text:"Detecting acid-fastness",correct:false},
{text:"Measuring ATP",correct:false},
{text:"Observing peptidoglycan",correct:false}
],
explanation:"Phase contrast microscopy is useful for observing transparent and colorless specimens that are difficult to see under a standard brightfield microscope. It enhances the contrast of these specimens by converting phase shifts in light passing through the specimen into changes in brightness."
},
// 60
{
question:"Dark-ground microscopy is especially useful for:",
answers:[
{text:"Ribosomes",correct:false},
{text:"Spirochetes",correct:true},
{text:"Capsule only",correct:false},
{text:"Gram-positive bacteria",correct:false},
{text:"Techoic acid",correct:false}
],
explanation:"Dark-ground microscopy is especially useful for observing specimens that are very small and transparent, such as bacteria, spirochetes, and other microorganisms that are difficult to see with brightfield microscopy."
},
// 61
{
question:"Routine staining procedures usually:",
answers:[
{text:"Keep bacteria alive",correct:false},
{text:"Increase motility",correct:false},
{text:"Kill bacteria",correct:true},
{text:"Dissolve capsule",correct:false},
{text:"Remove cytoplasm",correct:false}
],
explanation:"Routine methods for staining of bacteria involve drying and fixing smears, procedures that kill them. Fixing simultaneously kills the microorganisms and attaches them to the slide."
}, 
// 62
{
question:"Drying of smear before staining:",
answers:[
{text:"Preserves motility",correct:false},
{text:"Is unnecessary",correct:false},
{text:"Is part of fixation process",correct:true},
{text:"Removes dye",correct:false},
{text:"Dissolves cell wall",correct:false}
],
explanation:"Routine methods for staining of bacteria involve drying and fixing smears, procedures that kill them. "
},
// 63
{
question:"Crystal violet is classified as:",
answers:[
{text:"Differential stain",correct:false},
{text:"Counterstain",correct:false},
{text:"Simple stain",correct:true},
{text:"Acid dye",correct:false},
{text:"Capsule stain",correct:false}
],
explanation:"A simple stain is an aqueous or alcohol solution of a single basic dye. Some of the simple stains commonly used in the laboratory are methylene blue, carbolfuchsin, crystal violet, and safranin."
},
// 64
{
question:"Gram stain primarily classifies bacteria based on:",
answers:[
{text:"Shape",correct:false},
{text:"Size",correct:false},
{text:"Cell wall composition",correct:true},
{text:"Capsule thickness",correct:false},
{text:"Ribosome contect",correct:false}
],
explanation:"Gram stain primarily classifies bacteria based on the differences in their cell wall structure, specifically the composition and thickness of the peptidoglycan layer."
},
// 65
{
question:"Gram-positive bacteria resist decolorization due to:",
answers:[
{text:"Thin peptidoglycan",correct:false},
{text:"Thick peptidoglycan",correct:true},
{text:"Lipopolysaccharide",correct:false},
{text:"Lipoprotein",correct:false},
{text:"Capsule",correct:false}
],
explanation:"Gram-positive bacteria are those that resist decolorization and retain the primary stain, appearing violet"
},
// 66
{
question:"Organic solvents used in Gram stain include:",
answers:[
{text:"Water",correct:false},
{text:"Iodine",correct:false},
{text:"Acetone/alcohol",correct:true},
{text:"Safranin",correct:false},
{text:"Carbolfuschin",correct:false}
],
explanation:"Gram-negative bacteria are decolorized by organic solvents (acetone/alcohol) and, therefore, take the counterstain, appearing red."
},
// 67
{
question:"The counterstain in Gram staining makes Gram-negative bacteria appear:",
answers:[
{text:"Violet",correct:false},
{text:"Blue",correct:false},
{text:"Colorless",correct:false},
{text:"Red",correct:true},
{text:"Black",correct:false}
],
explanation:"Gram-negative bacteria are decolorized by organic solvents (acetone/alcohol) and, therefore, take the counterstain, appearing red."
}, 
// 68
{
question:"Acid-fast organisms resist decolorization by:",
answers:[
{text:"Alcohol",correct:false},
{text:"Organic solvent",correct:false},
{text:"Acid",correct:true},
{text:"Water",correct:false},
{text:"Heat",correct:false}
],
explanation:"Acid fast stain was discovered by Ehrlich (1882), who found that after staining with aniline dyes, tubercle bacilli resist decolorization with acids."
},
// 69
{
question:"Ziehl-Neelsen stain is used to detect:",
answers:[
{text:"Capsules",correct:false},
{text:"Ribosomes",correct:false},
{text:"Acid-fast bacilli",correct:true},
{text:"Flagella",correct:false},
{text:"Mesosomes",correct:false}
],
explanation:"Ziehl-Neelsen Staining of Acid Fast Bacilli"
},
// 70
{
question:"Mycobacterium leprae is:",
answers:[
{text:"Gram-negative",correct:false},
{text:"Acid-fast",correct:true},
{text:"Non-pathogenic",correct:false},
{text:"Spiral",correct:false},
{text:"Cocci",correct:false}
],
explanation:"Mycobacterium tuberculosis and M. leprae are acid-fast bacteria."
},
// 71
{
question:"Special stains are used to demonstrate:",
answers:[
{text:"All bacteria equally",correct:false},
{text:"Specific structures",correct:true},
{text:"Only motility",correct:false},
{text:"Cell division",correct:false},
{text:"Cytoplasmic membrane",correct:false}
],
explanation:"Special stains are used to stain specific structures inside or outside of a cell color and isolate specific parts of microorganisms, such as capsule stain, endospore stain and flagella stain."
},
// 72
{
question:"Nigrosin is commonly used in:",
answers:[
{text:"Gram stain",correct:false},
{text:"Acid-fast stain",correct:false},
{text:"Negative staining",correct:true},
{text:"Endospore stain",correct:false},
{text:"Flagella stain",correct:false}
],
explanation:"In Negative Staining, bacteria are mixed with dyes, such as Indian ink or nigrosin, that provide a uniformly colored background against which the unstained bacteria stand out in contrast."
},
// 73
{
question:"In negative staining, bacteria appear:",
answers:[
{text:"Dark on light background",correct:false},
{text:"Light on dark background",correct:true},
{text:"Red",correct:false},
{text:"Violet",correct:false},
{text:"Invincible",correct:false}
],
explanation:"In Negative Staining, bacteria are mixed with dyes, such as Indian ink or nigrosin, that provide a uniformly <b>colored background</b> against which the unstained bacteria stand out in contrast."
}, 
// 74
{
question:"Silver impregnation is useful for:",
answers:[
{text:"Cocci",correct:false},
{text:"Bacilli",correct:false},
{text:"Spirochetes",correct:true},
{text:"Ribosomes",correct:false},
{text:"Capsules only",correct:false}
],
explanation:"Cells and structures are too thin to be seen under the ordinary microscope and may be rendered visible if they are thickened by impregnation of silver on the surface for the demonstration of spirochetes and bacterial flagella."
},
// 75
{
question:"Coccobacilli resemble:",
answers:[
{text:"Spirals",correct:false},
{text:"Cocci",correct:true},
{text:"Vibrios",correct:false},
{text:"Filaments",correct:false},
{text:"Spirochetes",correct:false}
],
explanation:"In some of the bacilli, the length of the cells may be equal to width. Such bacillary forms are known as coccobacilli and have to be carefully differentiated from cocci."
},
// 76
{
question:"Vibratory motility is characteristic of:",
answers:[
{text:"Cocci",correct:false},
{text:"Bacilli",correct:false},
{text:"Vibrios",correct:true},
{text:"Spirilla",correct:false},
{text:"Mycoplasma",correct:false}
],
explanation:"Vibrios are curved or comma-shaped rods and derive the name from their characteristic <b>vibratory motility</b>."
}, 
// 77
{
question:"Flexuous spiral forms describe:",
answers:[
{text:"Spirilla",correct:false},
{text:"Bacilli",correct:false},
{text:"Spirochetes",correct:true},
{text:"Cocci",correct:false},
{text:"Vibrios",correct:false}
],
explanation:"<b>Spirochetes</b> (from speira meaning coil and chaite meaning hair) are flexuous spiral forms."
},
// 78
{
question:"Mycoplasma morphology is unstable because they lack:",
answers:[
{text:"DNA",correct:false},
{text:"Cytoplasm",correct:false},
{text:"Ribosomes",correct:false},
{text:"Cell wall",correct:true},
{text:"Capsules",correct:false}
],
explanation:"<b>Mycoplasma</b> are cell wall deficient bacteria and hence do not possess a stable morphology."
},
// 79
{
question:"Tetrads are groups of:",
answers:[
{text:"Two cocci",correct:false},
{text:"Four cocci",correct:true},
{text:"Eight cocci",correct:false},
{text:"Chain oc cocci",correct:false},
{text:"Clusters",correct:false}
],
explanation:"Cocci may be arranged in pairs (<b>diplococci</b>); long chains (<b>Steptococcus, Enterococcus, and Lactococcus</b>); grape like clusters (<b>staphylococci</b>); square groups of four cells (<b>tetrads</b>) as in members of the genus Micrococcus; cubical packets of eight of cells (<b>genus Sarcina</b>)."
}, 
// 80
{
question:"Sarcina forms:",
answers:[
{text:"Pairs",correct:false},
{text:"Chains",correct:false},
{text:"Clusters",correct:true},
{text:"Cubical packets of eight",correct:false},
{text:"V-shapes",correct:false}
],
explanation:"Cocci may be arranged in pairs (<b>diplococci</b>); long chains (<b>Steptococcus, Enterococcus, and Lactococcus</b>); grape like clusters (<b>staphylococci</b>); square groups of four cells (<b>tetrads</b>) as in members of the genus Micrococcus; cubical packets of eight of cells (<b>genus Sarcina</b>)."
},
// 81
{
question:"Corynebacterium diphtheriae shows:",
answers:[
{text:"Clusters",correct:false},
{text:"Pairs",correct:false},
{text:"Chinese-letter arrangement",correct:true},
{text:"Tetrads",correct:false},
{text:"Spirals",correct:false}
],
explanation:"Some bacilli too may be arranged in chains (streptobacilli). Others are arranged at various angles to each other, resembling the letter V presenting a cuneiform or Chinese letter arrangement and is characteristic of Corynebacterium diphtheriae."
},
// 82
{
question:"The bacterial cell wall lies:",
answers:[
{text:"Inside cytoplasm",correct:false},
{text:"Outside plasma membrane",correct:true},
{text:"Inside ribosomes",correct:false},
{text:"Inside capsule",correct:false},
{text:"Outside flagella",correct:false}
],
explanation:"The cell wall is the layer that lies just <b>outside the plasma membrane</b>, is strong and relatively rigid, though with some elasticity, and openly porous."
}, 
// 83
{
question:"One function of cell wall is:",
answers:[
{text:"ATP synthesis",correct:false},
{text:"Protein synthesis",correct:false},
{text:"Shape maintenance",correct:true},
{text:"DNA replication",correct:false},
{text:"Ribosome formation",correct:false}
],
explanation:"<b>Functions of the cell wall:</b> 1. To impart shape and rigidity to the cell. 2. Supports the weak cytoplasmic membrane against the high internal osmotic pressure of the protoplasm. 3. Maintains the characteristic shape of the bacterium. 4. Takes part in cell division. 5. Also function in interactions (e.g. adhesion) with other bacteria and with mammalian cells. 6. Provides specific protein and carbohydrate receptors for the attachment of some bacterial viruses."
},
// 84
{
question:"Teichoic acids are absent in:",
answers:[
{text:"Gram-positive",correct:false},
{text:"Gram-negative",correct:true},
{text:"Mycobacteria",correct:false},
{text:"Bacilli",correct:false},
{text:"Cocci",correct:false}
],
explanation:"The cell walls of gram-positive bacteria contain teichoic acids, which is absent in gram-negative bacteria."
}, 
// 85
{
question:"Lipopolysaccharide is part of:",
answers:[
{text:"Gram-positive wall",correct:false},
{text:"Cytoplasm",correct:false},
{text:"Gram-negative outer membrane",correct:true},
{text:"Capsule",correct:false},
{text:"Ribosome",correct:false}
],
explanation:"Gram-negative cell wall consists of peptidoglycan and lipoprotein, outer membrane, and lipopolysaccharide."
},
// 86
{
question:"Cytoplasmic membrane is visible under:",
answers:[
{text:"Light microscope",correct:false},
{text:"Dark-field microscope",correct:false},
{text:"Phase contrast microscope",correct:false},
{text:"Electron microscope",correct:true},
{text:"Fluorescent microscope",correct:false}
],
explanation:"The cytoplasmic (plasma) membrane limits the bacterial protoplast. It is thin (5–10 nm thick), elastic and can only be seen with <b>electron microscope</b>."
}, 
// 87
{
question:"Cytoplasmic membrane is:",
answers:[
{text:"Rigid",correct:false},
{text:"Thick",correct:false},
{text:"Elastic",correct:true},
{text:"Porous like wall",correct:false},
{text:"Composed of peptidoglycan",correct:false}
],
explanation:"The cytoplasmic (plasma) membrane limits the bacterial protoplast. It is thin (5–10 nm thick), <b>elastic</b> and can only be seen with electron microscope."
},
// 88
{
question:"ATP generation occurs in:",
answers:[
{text:"Ribosome",correct:false},
{text:"Capsule",correct:false},
{text:"Cytoplasmic membrane",correct:true},
{text:"Cell wall",correct:false},
{text:"Flagella",correct:false}
],
explanation:"One of the function of <b>cytoplasmic(plasma) membrane</b> is generation of chemical energy (i.e. ATP)."
}, 
// 89
{
question:"Capsule in Pneumococcus is:",
answers:[
{text:"Slime layer",correct:false},
{text:"Condensed polymer",correct:true},
{text:"Teichoic acid",correct:false},
{text:"Lipopolysaccharide",correct:false},
{text:"Ribosomal protein",correct:false}
],
explanation:"Many bacteria synthesize large amount of extracellular polymer in their natural environments. When the <b>polymer forms a condensed</b>, well-defined layer closely surrounding the cell, it is called the capsule as in the Pneumococcus."
},
// 90
{
question:"Slime layer differs from capsule because it is:",
answers:[
{text:"Thick",correct:false},
{text:"Condensed",correct:false},
{text:"Easily washed off",correct:true},
{text:"Rigid",correct:false},
{text:"Protein only",correct:false}
],
explanation:"Many bacteria synthesize large amount of extracellular polymer in their natural environments. If the polymer is <b>easily washed off</b> and does not appear to be associated with the cell in any definite fashion, it is referred as a slime layer as in leuconostoc."
}, 
// 91
{
question:"Glycocalyx is composed mainly of:",
answers:[
{text:"Lipids",correct:false},
{text:"Polysaccharides",correct:true},
{text:"DNA",correct:false},
{text:"Protein only",correct:false},
{text:"Peptidoglycan",correct:false}
],
explanation:"A glycocalyx is a network of <b>polysaccharide</b> extending from the surface of bacteria and other cells."
},
// 92
{
question:"Microcapsules are:",
answers:[
{text:"Thick capsules",correct:false},
{text:"Thin capsules not visible by light microscope",correct:true},
{text:"Slime layers",correct:false},
{text:"Ribosomes",correct:false},
{text:"Mesosomes",correct:false}
],
explanation:"Capsules too thin to be seen under the light microscope are called <b>microcapsules</b>."
}, 
// 93
{
question:"Flagella are:",
answers:[
{text:"Short and thin",correct:false},
{text:"Branched",correct:false},
{text:"Long and helical",correct:true},
{text:"Rigid rods",correct:false},
{text:"Cytoplasmic",correct:false}
],
explanation:"Motile bacteria, except spirochetes, possess one or more unbranched, long, sinuous filaments called flagella, which are the organs of locomotion. They are long, hollow, helical filaments, usually several times the length of the cell."
}, 
// 94
{
question:"Amphitrichous arrangement means:",
answers:[
{text:"Single polar flagellum",correct:false},
{text:"Flagella all around",correct:false},
{text:"Single flagellum at both ends",correct:true},
{text:"Tuft at one end",correct:false},
{text:"No flagella",correct:false}
],
explanation:"Amphitrichous: Single flagellum at both ends e.g. Alkaligenes faecalis."
},
// 95
{
question:"Lophotrichous means:",
answers:[
{text:"Single",correct:false},
{text:"Both ends single",correct:false},
{text:"Tuft at one or both ends",correct:true},
{text:"All around",correct:false},
{text:"None",correct:false}
],
explanation:"Lophotrichous: Tuft of flagella at one or both ends, e.g. Spirilla."
}, 
// 96
{
question:"Streptococci are arranged in:",
answers:[
{text:"Clusters",correct:false},
{text:"Pairs",correct:false},
{text:"Chains",correct:true},
{text:"Tetrads",correct:false},
{text:"Cubes",correct:false}
],
explanation:"Cocci may be arranged in pairs (diplococci); <b>long chains</b> (Steptococcus, Enterococcus, and Lactococcus); grape like clusters (staphylococci); square groups of four cells (tetrads) as in members of the genus Micrococcus; cubical packets of eight of cells (genus Sarcina)."
},
// 97
{
question:"Staphylococci resemble:",
answers:[
{text:"Chains",correct:false},
{text:"Cubes",correct:false},
{text:"Grapes",correct:true},
{text:"Spirals",correct:false},
{text:"Commas",correct:false}
],
explanation:"Cocci may be arranged in pairs (diplococci); long chains (Steptococcus, Enterococcus, and Lactococcus); <b>grape like clusters (staphylococci)</b>; square groups of four cells (tetrads) as in members of the genus Micrococcus; cubical packets of eight of cells (genus Sarcina)."
}, 
// 98
{
question:"Micrococcus typically forms:",
answers:[
{text:"Chains",correct:false},
{text:"Tetrads",correct:true},
{text:"Clusters",correct:false},
{text:"Spirals",correct:false},
{text:"V-shapes",correct:false}
],
explanation:"Cocci may be arranged in pairs (diplococci); long chains (Steptococcus, Enterococcus, and Lactococcus); grape like clusters (staphylococci); square groups of four cells (tetrads) as in members of the genus Micrococcus; <b>cubical packets of eight of cells</b> (genus Sarcina)."
},
// 99
{
question:"Enterococcus is commonly arranged in:",
answers:[
{text:"Chains",correct:true},
{text:"Clusters",correct:false},
{text:"Pairs only",correct:false},
{text:"Cubes",correct:false},
{text:"Spirals",correct:false}
],
explanation:"Cocci may be arranged in pairs (diplococci); <b>long chains (Steptococcus, Enterococcus, and Lactococcus)</b>; grape like clusters (staphylococci); square groups of four cells (tetrads) as in members of the genus Micrococcus; cubical packets of eight of cells (genus Sarcina)."
}, 
// 100
{
question:"Lactococcus shows arrangement in:",
answers:[
{text:"Chains",correct:true},
{text:"Clusters",correct:false},
{text:"Tetrads",correct:false},
{text:"Pockets",correct:false},
{text:"V-forms",correct:false}
],
explanation:"Cocci may be arranged in pairs (diplococci); <b>long chains (Steptococcus, Enterococcus, and Lactococcus)</b>; grape like clusters (staphylococci); square groups of four cells (tetrads) as in members of the genus Micrococcus; cubical packets of eight of cells (genus Sarcina)."
},
// 101
{
question:"The V-shaped arrangement is characteristic of:",
answers:[
{text:"Bacillus",correct:false},
{text:"Corynebacterium diphtheriae",correct:true},
{text:"Vibrio",correct:false},
{text:"Mycoplasma",correct:false},
{text:"Spirochetes",correct:false}
],
explanation:"Some bacilli too may be arranged in chains (streptobacilli). Others are arranged at various angles to each other, resembling the <b>letter V presenting a cuneiform or Chinese letter arrangement</b> and is characteristic of Corynebacterium diphtheriae."
}, 
// 102
{
question:"The cell wall is described as:",
answers:[
{text:"Thin and fragile",correct:false},
{text:"Strong and rigid",correct:true},
{text:"Elastic only",correct:false},
{text:"Fluid-like",correct:false},
{text:"Non-porous",correct:false}
],
explanation:"The cell wall is the layer that lies just outside the plasma membrane, is <b>strong and relatively rigid</b>, though with some elasticity, and openly porous."
},
// 103
{
question:"The cell wall helps resist:",
answers:[
{text:"Heat",correct:false},
{text:"Staining",correct:false},
{text:"Internal osmotic pressure",correct:true},
{text:"Ribosome synthesis",correct:false},
{text:"DNA damage",correct:false}
],
explanation:"The cell wall supports the weak cytoplasmic membrane against the <b>high internal osmotic pressure</b> of the protoplasm."
}, 
// 104
{
question:"Viral attachment to bacteria involves receptors in the:",
answers:[
{text:"Capsule",correct:false},
{text:"Cytoplasm",correct:false},
{text:"Cell wall",correct:true},
{text:"Ribosomes",correct:false},
{text:"Mesosomes",correct:false}
],
explanation:"One of the function of <b>cell wall</b> is to provide specific protein and carbohydrate receptors for the attachment of some bacterial viruses."
},
// 105
{
question:"Gram-positive cell wall contains:",
answers:[
{text:"Lipopolysaccharide",correct:false},
{text:"Lipoprotein",correct:false},
{text:"Teichoic acid",correct:true},
{text:"Outer membrane",correct:false},
{text:"Thin peptidoglycan",correct:false}
],
explanation:"In gram-positive bacteria, the cell wall consists mainly of <b>peptidoglycan and teichoic acids</b>. "
}, 
// 106
{
question:"Gram-negative bacteria possess:",
answers:[
{text:"Teichoic acid",correct:false},
{text:"Thick peptidoglycan",correct:false},
{text:"Outer membrane",correct:true},
{text:"No peptidoglycan",correct:false},
{text:"Capsule only",correct:false}
],
explanation:"Gram-negative cell wall consists of <b>peptidoglycan and lipoprotein, outer membrane, and lipopoly saccharide</b>."
},
// 107
{
question:"Lipoprotein is part of:",
answers:[
{text:"Gram-positive wall",correct:false},
{text:"Gram-negative wall",correct:true},
{text:"Capsule",correct:false},
{text:"Ribosome",correct:false},
{text:"Flagella",correct:false}
],
explanation:"Gram-negative cell wall consists of <b>peptidoglycan and lipoprotein, outer membrane, and lipopoly saccharide</b>."
}, 
// 108
{
question:"The plasma membrane primarily:",
answers:[
{text:"Gives shape",correct:false},
{text:"Is porous",correct:false},
{text:"Controls metabolite flow",correct:true},
{text:"Contains teichoic acid",correct:false},
{text:"Forms capsule",correct:false}
],
explanation:"<b>Functions of Cytoplasmic Membrane:</b> Semipermeable membrane: controlling the inflow and outflow of metabolites to and from the protoplasm"
},
// 109
{
question:"Chemotaxis proteins are located in:",
answers:[
{text:"Ribosomes",correct:false},
{text:"Cell wall",correct:false},
{text:"Cytoplasmic membrane",correct:true},
{text:"Capsule",correct:false},
{text:"Mesosomes only",correct:false}
],
explanation:"<b>Functions of Cytoplasmic Membrane:</b> <b>i.</b> Semipermeable membrane: controlling the inflow and outflow of metabolites to and from the protoplasm <b>ii.</b> Housing enzymes <b>iii. Housing many sensory and chemotaxis proteins.</b> <b>iv.</b> Generation of chemical energy (i.e. ATP) <b>v.</b> Cell motility <b>vi.</b> Mediation of chromosomal segregation during replication."
}, 
// 110
{
question:"Chromosomal segregation during replication is mediated by:",
answers:[
{text:"Capsule",correct:false},
{text:"Plasma membrane",correct:true},
{text:"Ribosomes",correct:false},
{text:"Flagella",correct:false},
{text:"Slime layer",correct:false}
],
explanation:"<b>Functions of Cytoplasmic Membrane:</b> <b>i.</b> Semipermeable membrane: controlling the inflow and outflow of metabolites to and from the protoplasm <b>ii.</b> Housing enzymes <b>iii.</b> Housing many sensory and chemotaxis proteins. <b>iv.</b> Generation of chemical energy (i.e. ATP) <b>v.</b> Cell motility <b>vi. Mediation of chromosomal segregation during replication.</b>"
},
// 111
{
question:"A slime layer is:",
answers:[
{text:"Rigid",correct:false},
{text:"Well-defined",correct:false},
{text:"Easily washed off",correct:true},
{text:"Made of protein only",correct:false},
{text:"Part of ribosome",correct:false}
],
explanation:"Many bacteria synthesize large amount of extracellular polymer in their natural environments. If the polymer is <b>easily washed off</b> and does not appear to be associated with the cell in any definite fashion, it is referred as a slime layer as in leuconostoc."
}, 
// 112
{
question:"Glycocalyx extends from:",
answers:[
{text:"Ribosomes",correct:false},
{text:"Plasma membrane interior",correct:false},
{text:"Surface of bacteria",correct:true},
{text:"Flagella",correct:false},
{text:"Mesosomes",correct:false}
],
explanation:"A glycocalyx is a network of polysaccharide <b>extending from the surface of bacteria</b> and other cells."
},
// 113
{
question:"Capsules protect bacteria by:",
answers:[
{text:"Increasing motility",correct:false},
{text:"Enhancing adhesion",correct:true},
{text:"Increasing ribosomes",correct:false},
{text:"Reducing ATP",correct:false},
{text:"Thickening cytoplasm",correct:false}
],
explanation:"Capsules protect bacteria by enhancing adhesion."
}, 
// 114
{
question:"Flagella are composed of:",
answers:[
{text:"Peptidoglycan",correct:false},
{text:"Lipid",correct:false},
{text:"Hollow helical filaments",correct:true},
{text:"Teichoic acid",correct:false},
{text:"DNA",correct:false}
],
explanation:"Motile bacteria, except spirochetes, possess one or more unbranched, long, sinuous filaments called <b>flagella</b>, which are the organs of locomotion. They are <b>long, hollow, helical filaments</b>, usually several times the length of the cell. "
},
// 115
{
question:"Peritrichous arrangement means:",
answers:[
{text:"One at one end",correct:false},
{text:"One at both ends",correct:false},
{text:"Tuft at one end",correct:false},
{text:"All around cell",correct:true},
{text:"No flagella",correct:false}
],
explanation:"Peritrichous: Flagella <b>surrounding the cell</b> (e.g. Typhoid bacilli)"
}, 
// 116
{
question:"Vibrio cholerae has:",
answers:[
{text:"Amphitrichous flagella",correct:false},
{text:"Monotrichous flagellum",correct:true},
{text:"Peritrichous",correct:false},
{text:"No flagella",correct:false},
{text:"Lophotrichous",correct:false}
],
explanation:"Single polar flagellum (e.g. Vibrio Cholerae)"
},
// 117
{
question:"Spirilla may show:",
answers:[
{text:"Peritrichous flagella",correct:false},
{text:"Lophotrichous arrangement",correct:true},
{text:"No motility",correct:false},
{text:"Capsule only",correct:false},
{text:"Microcapsule",correct:false}
],
explanation:"Lophotrichous: Tuft of flagella at one or both ends, e.g. Spirilla."
}, 
// 118
{
question:"Flagella can be demonstrated by:",
answers:[
{text:"Gram stain",correct:false},
{text:"Acid-fast stain",correct:false},
{text:"Special staining methods",correct:true},
{text:"Simple stain",correct:false},
{text:"Teichoic acid stain",correct:false}
],
explanation:"The following methods are used for demonstration of flagella: i. Dark ground illumination. ii. Special staining methods. iii. Electron microscopy. iv. Indirect methods,"
},
// 119
{
question:"Electron microscopy is useful for:",
answers:[
{text:"Viewing thick capsules only",correct:false},
{text:"Viewing cytoplasmic membrane",correct:true},
{text:"Viewing color changes",correct:false},
{text:"Gram reaction",correct:false},
{text:"Wet mount only",correct:false}
],
explanation:"The cytoplasmic (plasma) membrane limits the bacterial protoplast. It is thin (5–10 nm thick), elastic and can only be seen with <b>electron microscope</b>."
}, 
// 120
{
question:"Fimbriae are:",
answers:[
{text:"Longer than flagella",correct:false},
{text:"Organs of locomotion",correct:true},
{text:"Short and hair-like",correct:false},
{text:"Made of peptidoglycan",correct:false},
{text:"Found only in Gram-positive",correct:false}
],
explanation:"Many gram-negative bacteria have short, fine, hair like surface appendages called fimbriae or pili depending on their function."
},
// 121
{
question:"Pili differ from flagella because they are:",
answers:[
{text:"Thicker",correct:false},
{text:"Longer",correct:false},
{text:"Shorter and thinner",correct:true},
{text:"Internal",correct:false},
{text:"Rigid rods",correct:false}
],
explanation:"Many gram-negative bacteria have short, fine, hair like surface appendages called fimbriae or pili depending on their function. <b>They are shorter and thinner than flagella</b>."
}, 
// 122
{
question:"Cytoplasm is:",
answers:[
{text:"Dry",correct:false},
{text:"Gel-like",correct:true},
{text:"Rigid",correct:false},
{text:"Lipid-only",correct:false},
{text:"Empty",correct:false}
],
explanation:"The cytoplasm of the bacterial cell is a <b>viscous watery solution or soft gel</b>, containing a variety of organic or inorganic solutes, and numerous ribosomes and polysomes. The cytoplasm may contain granules or inclusions."
},
// 123
{
question:"Ribosomes are:",
answers:[
{text:"Membranous",correct:false},
{text:"Electron dense",correct:true},
{text:"Hollow",correct:false},
{text:"Large structures",correct:false},
{text:"Flagellar components",correct:false}
],
explanation:"The cytoplasmic region of a well-studied bacterium consists predominantly of small, electron-dense particles called <b>ribosomes</b>. The ribosomes are the location for all bacterial protein synthesis."
}, 
// 124
{
question:"Protein synthesis occurs in:",
answers:[
{text:"Capsule",correct:false},
{text:"Cell wall",correct:false},
{text:"Ribosomes",correct:true},
{text:"Mesosomes",correct:false},
{text:"Flagella",correct:false}
],
explanation:"The cytoplasmic region of a well-studied bacterium consists predominantly of small, electron-dense particles called ribosomes. The <b>ribosomes are the location for all bacterial protein synthesis</b>."
},
// 125
{
question:"Mesosomes are:",
answers:[
{text:"External appendages",correct:false},
{text:"Cytoplasmic inclusions",correct:false},
{text:"Plasma membrane invaginations",correct:true},
{text:"Ribosomal clusters",correct:false},
{text:"Capsule fragments",correct:false}
],
explanation:"Mesosomes(chondroids) are convoluted or multilaminated membranous bodies formed as <b>invaginations of the plasma membrane</b> into the cytoplasm."
}, 
// 126
{
question:"The thickness of plasma membrane is:",
answers:[
{text:"1–2 nm",correct:false},
{text:"5–10 nm",correct:true},
{text:"20–30 nm",correct:false},
{text:"50 nm",correct:false},
{text:"100 nm",correct:false}
],
explanation:"The cytoplasmic (plasma) membrane limits the bacterial protoplast. It is thin <b>(5–10 nm thick)</b>, elastic and can only be seen with electron microscope."
},
// 127
{
question:"The most useful staining procedure in bacteriology is:",
answers:[
{text:"Simple stain",correct:false},
{text:"Negative stain",correct:false},
{text:"Gram stain",correct:true},
{text:"Capsule stain",correct:false},
{text:"Endospore stain",correct:false}
],
explanation:"The <b>Gram stain</b> is the principal stain used for microscopic examination of bacteria"
}, 
// 128
{
question:"Gram stain was introduced in:",
answers:[
{text:"1882",correct:false},
{text:"1884",correct:true},
{text:"1890",correct:false},
{text:"1875",correct:false},
{text:"1900",correct:false}
],
explanation:"The Gram stain is the principal stain used for microscopic examination of bacteria. It was first devised by the histologist Hans Christian Gram <b>(1884)</b> as a method of staining bacteria in tissues. "
},
// 129
{
question:"Acid-fast stain was discovered in:",
answers:[
{text:"1884",correct:false},
{text:"1882",correct:true},
{text:"1870",correct:false},
{text:"1890",correct:false},
{text:"1905",correct:false}
],
explanation:"Acid fast stain was discovered by Ehrlich <b>(1882)</b>, who found that after staining with aniline dyes, tubercle bacilli resist decolorization with acids."
}, 
// 130
{
question:"The major structural difference between Gram-positive and Gram-negative bacteria lies in:",
answers:[
{text:"Ribosome number",correct:false},
{text:"Cytoplasmic volume",correct:false},
{text:"Cell wall composition",correct:true},
{text:"Flagella length",correct:false},
{text:"DNA size",correct:false}
],
explanation:"The major structural difference between Gram-positive and Gram-negative bacteria lies in cell wall composition."
},
// 131
{
question:"Gram-negative bacteria have a ______ peptidoglycan layer.",
answers:[
{text:"Thick",correct:false},
{text:"Thin",correct:true},
{text:"Double",correct:false},
{text:"Triple",correct:false},
{text:"Absent",correct:false}
],
explanation:"Peptidoglycan: It is thicker and stronger (more extensively crosslinked) than those of gram-negative bacteria."
}, 
// 132
{
question:"Gram-positive bacteria lack:",
answers:[
{text:"Peptidoglycan",correct:false},
{text:"Cytoplasmic membrane",correct:false},
{text:"Outer membrane",correct:true},
{text:"Ribosomes",correct:false},
{text:"Capsule",correct:false}
],
explanation:"Gram-positive bacteria lack outer membrane"
},
// 133
{
question:"Lipopolysaccharide is located in the:",
answers:[
{text:"Cytoplasm",correct:false},
{text:"Ribosome",correct:false},
{text:"Outer membrane",correct:true},
{text:"Capsule",correct:false},
{text:"Mesosome",correct:false}
],
explanation:"Lipopolysaccharide is located in the outer membrane"
},
// 134
{
question:"The porous nature of the cell wall allows:",
answers:[
{text:"DNA replication",correct:false},
{text:"Free passage of some substances",correct:true},
{text:"Ribosome movement",correct:false},
{text:"Flagella rotation",correct:false},
{text:"Capsule formation",correct:false}
],
explanation:"The cell wall is the layer that lies just outside the plasma membrane, is strong and relatively rigid, though with some elasticity, and openly porous. The porous nature of the cell wall allows free passage of some substances. "
}, 
// 135
{
question:"Cell division is aided by the:",
answers:[
{text:"Capsule",correct:false},
{text:"Cell wall",correct:true},
{text:"Ribosome",correct:false},
{text:"Slime layer",correct:false},
{text:"Flagella",correct:false}
],
explanation:"<b>Functions of the cell wall:</b> 1. To impart shape and rigidity to the cell. 2. Supports the weak cytoplasmic membrane against the high internal osmotic pressure of the protoplasm. 3. Maintains the characteristic shape of the bacterium. 4. <b>Takes part in cell division</b>. 5. Also function in interactions (e.g. adhesion) with other bacteria and with mammalian cells. 6. Provides specific protein and carbohydrate receptors for the attachment of some bacterial viruses."
},
// 136
{
question:"Adhesion to mammalian cells involves:",
answers:[
{text:"Ribosomes",correct:false},
{text:"Cytoplasmic membrane only",correct:false},
{text:"Cell wall components",correct:true},
{text:"Mesosomes",correct:false},
{text:"ATP",correct:false}
],
explanation:"<b>Functions of the cell wall:</b> 1. To impart shape and rigidity to the cell. 2. Supports the weak cytoplasmic membrane against the high internal osmotic pressure of the protoplasm. 3. Maintains the characteristic shape of the bacterium. 4. Takes part in cell division. 5. <b>Also function in interactions (e.g. adhesion) with other bacteria and with mammalian cells</b>. 6. Provides specific protein and carbohydrate receptors for the attachment of some bacterial viruses."
}, 
// 137
{
question:"Bacterial viruses attach to receptors located on the:",
answers:[
{text:"Ribosomes",correct:false},
{text:"Capsule only",correct:false},
{text:"Cell wall",correct:true},
{text:"Cytoplasm",correct:false},
{text:"Mesosome",correct:false}
],
explanation:"<b>Functions of the cell wall:</b> 1. To impart shape and rigidity to the cell. 2. Supports the weak cytoplasmic membrane against the high internal osmotic pressure of the protoplasm. 3. Maintains the characteristic shape of the bacterium. 4. Takes part in cell division. 5. Also function in interactions (e.g. adhesion) with other bacteria and with mammalian cells. 6. <b>Provides specific protein and carbohydrate receptors for the attachment of some bacterial viruses</b>."
},
// 138
{
question:"The main rigid component of Gram-positive cell wall is:",
answers:[
{text:"Lipopolysaccharide",correct:false},
{text:"Lipoprotein",correct:false},
{text:"Peptidoglycan",correct:true},
{text:"Capsule",correct:false},
{text:"DNA",correct:false}
],
explanation:"<b>Peptidoglycan</b>: It is thicker and stronger (more extensively crosslinked) than those of gram-negative bacteria. "
}, 
// 139
{
question:"Teichoic acids contribute to:",
answers:[
{text:"Motility",correct:false},
{text:"Cell wall structure",correct:true},
{text:"Ribosome formation",correct:false},
{text:"ATP synthesis",correct:false},
{text:"Capsule detachment",correct:false}
],
explanation:"In gram-positive bacteria, the cell wall consists mainly of peptidoglycan and teichoic acids."
},
// 140
{
question:"The cytoplasmic membrane is described as:",
answers:[
{text:"Thick and porous",correct:false},
{text:"Rigid and strong",correct:false},
{text:"Thin and elastic",correct:true},
{text:"Gel-like",correct:false},
{text:"Nonfunctional",correct:false}
],
explanation:"The cytoplasmic (plasma) membrane limits the bacterial protoplast. It is <b>thin (5–10 nm thick), elastic</b> and can only be seen with electron microscope."
}, 
// 141
{
question:"Enzymes involved in metabolism are housed in the:",
answers:[
{text:"Ribosomes",correct:false},
{text:"Capsule",correct:false},
{text:"Cytoplasmic membrane",correct:true},
{text:"Cell wall",correct:false},
{text:"Flagella",correct:false}
],
explanation:"Functions of Cytoplasmic Membrane i. Semipermeable membrane: controlling the inflow and outflow of metabolites to and from the protoplasm ii. <b>Housing enzymes</b> iii. Housing many sensory and chemotaxis proteins. iv. Generation of chemical energy (i.e. ATP) v. Cell motility vi. Mediation of chromosomal segregation during replication."
},
// 144
{
question:"Bacterial motility (except spirochetes) depends on:",
answers:[
{text:"Pili",correct:false},
{text:"Capsule",correct:false},
{text:"Flagella",correct:true},
{text:"Ribosomes",correct:false},
{text:"Teichoic acids",correct:false}
],
explanation:"Motile bacteria, except spirochetes, possess one or more unbranched, long, sinuous filaments called flagella, which are the organs of locomotion."
}, 
// 143
{
question:"Spirochetes differ from other motile bacteria because:",
answers:[
{text:"They lack motility",correct:false},
{text:"They use ribosomes",correct:false},
{text:"They do not possess typical external flagella",correct:true},
{text:"They lack cell wall",correct:false},
{text:"They are Gram-positive",correct:false}
],
explanation:"Spirochetes They do not possess typical external flagella"
},
// 144
{
question:"The primary purpose of simple stains is to:",
answers:[
{text:"Differentiate bacteria",correct:false},
{text:"Show capsule",correct:false},
{text:"Provide color contrast",correct:true},
{text:"Identify acid-fastness",correct:false},
{text:"Show motility",correct:false}
],
explanation:"A simple stain is an aqueous or alcohol solution of a single basic dye. Some of the simple stains commonly used in the laboratory are methylene blue, carbolfuchsin, crystal violet, and safranin. They <b>provide color contrast</b>, but impart the same color to all bacteria."
}, 
// 145
{
question:"Differential stains are characterized by:",
answers:[
{text:"Same color for all bacteria",correct:false},
{text:"No color",correct:false},
{text:"Different colors for different bacteria",correct:true},
{text:"Killing bacteria only",correct:false},
{text:"Showing flagella only",correct:false}
],
explanation:"<b>Differential stains</b> impart different colors to different bacteria or bacterial structures. Gram stain and the acid-fast stain are two most widely used differential stains."
},
// 146
{
question:"The acid-fast property is due to resistance to:",
answers:[
{text:"Heat",correct:false},
{text:"Alcohol",correct:false},
{text:"Acids",correct:true},
{text:"Water",correct:false},
{text:"Air",correct:false}
],
explanation:"Acid Fast Stain (Ziehl-Neelsen Staining of Acid Fast Bacilli). Acid fast stain was discovered by Ehrlich (1882), who found that after staining with aniline dyes, tubercle bacilli <b>resist decolorization with acids</b>. Mycobacterium tuberculosis and M. leprae are acid-fast bacteria."
},
// 147
{
question:"Indian ink is used in:",
answers:[
{text:"Gram stain",correct:false},
{text:"Acid-fast stain",correct:false},
{text:"Negative staining",correct:true},
{text:"Endospore stain",correct:false},
{text:"Flagella stain",correct:false}
],
explanation:"In Negative Staining bacteria are mixed with dyes, such as <b>Indian ink or nigrosin</b> that provide a uniformly colored background against which the unstained bacteria stand out in contrast. This is particularly useful in the demonstration of bacterial capsules, which do not take simple stains."
},
// 148
{
question:"In negative staining, capsules appear:",
answers:[
{text:"Dark",correct:false},
{text:"Violet",correct:false},
{text:"As clear halos",correct:true},
{text:"Red",correct:false},
{text:"Invicible",correct:false}
],
explanation:"In Negative Staining bacteria are mixed with dyes, such as Indian ink or nigrosin that provide a uniformly colored background against which the unstained bacteria stand out in contrast. This is particularly useful in the demonstration of bacterial capsules, which <b>do not take simple stains</b>."
}, 
// 149
{
question:"Silver impregnation thickens structures by:",
answers:[
{text:"Heating",correct:false},
{text:"Staining cytoplasm",correct:false},
{text:"Depositing silver",correct:true},
{text:"Removing capsule",correct:false},
{text:"Breaking peptidoglycan",correct:false}
],
explanation:"Cells and structures are too thin to be seen under the ordinary microscope and may be rendered visible if they are thickened by impregnation of silver on the surface for the demonstration of spirochetes and bacterial flagella."
},
// 150
{
question:"Coccobacilli must be carefully differentiated from:",
answers:[
{text:"Spirals",correct:false},
{text:"Vibrios",correct:false},
{text:"Cocci",correct:true},
{text:"Spirochetes",correct:false},
{text:"Mycoplasma",correct:false}
],
explanation:"Bacilli (from baculus meaning rod) are relatively straight, rod shaped (cylindrical) cells. In some of the bacilli, the length of the cells may be equal to width. <b>Such bacillary forms are known as coccobacilli</b> and have to be carefully differentiated from cocci."
}, 
// 151
{
question:"Vibrios are named for their:",
answers:[
{text:"Spiral shape",correct:false},
{text:"Square grouping",correct:false},
{text:"Vibratory motility",correct:true},
{text:"Capsule thickness",correct:false},
{text:"Peptidoglycan-8",correct:false}
],
explanation:"Vibrios are curved or comma-shaped rods and derive the name from their characteristic <b>vibratory motility</b>."
},
// 152
{
question:"Spirilla are described as:",
answers:[
{text:"Flexible spirals",correct:false},
{text:"Rigid spirals",correct:true},
{text:"Straight rods",correct:false},
{text:"Round bodies",correct:false},
{text:"Filamentous clusters",correct:false}
],
explanation:"Spirilla are <b>rigid spiral</b> or helical forms."
}, 
// 153
{
question:"Flexibility distinguishes spirochetes from:",
answers:[
{text:"Cocci",correct:false},
{text:"Bacilli",correct:false},
{text:"Spirilla",correct:true},
{text:"Vibrios",correct:false},
{text:"Mycoplasma",correct:false}
],
explanation:"Spirochetes (from speira meaning coil and chaite meaning hair) are flexuous spiral forms."
},
// 154
{
question:"Mycoplasma appear variable in shape because:",
answers:[
{text:"They lack ribosomes",correct:false},
{text:"They lack cytoplasm",correct:false},
{text:"They lack cell wall",correct:true},
{text:"They lack membrane",correct:false},
{text:"They lack DNA",correct:false}
],
explanation:"EMycoplasma are cell wall deficient bacteria and hence do not possess a stable morphology. They occur as round or oval bodies and interlacing filaments."
},
// 155
{
question:"Chains of bacilli are termed:",
answers:[
{text:"Diplobacilli",correct:false},
{text:"Streptobacilli",correct:true},
{text:"Tetrabacilli",correct:false},
{text:"Sarcina",correct:false},
{text:"Coccobacilli",correct:false}
],
explanation:"Some bacilli too may be arranged in chains (streptobacilli)."
},
// 156
{
question:"The cytoplasm contains numerous:",
answers:[
{text:"Flagella",correct:false},
{text:"Ribosomes",correct:true},
{text:"Teichoic acids",correct:false},
{text:"Capsules",correct:false},
{text:"Lipopolysaccharides",correct:false}
],
explanation:"The cytoplasm of the bacterial cell is a viscous watery solution or soft gel, containing a variety of organic or inorganic solutes, and numerous ribosomes and polysomes."
}, 
// 157
{
question:"Ribosomes appear under electron microscope as:",
answers:[
{text:"Hollow tubes",correct:false},
{text:"Clear spaces",correct:false},
{text:"Electron-dense particles",correct:true},
{text:"Spirals",correct:false},
{text:"Rods",correct:false}
],
explanation:"The cytoplasmic region of a well-studied bacterium consists predominantly of small, electron-dense particles called ribosomes. The ribosomes are the location for all bacterial protein synthesis."
},
// 158
{
question:"Mesosomes are thought to assist in:",
answers:[
{text:"Capsule formation",correct:false},
{text:"DNA replication processes",correct:true},
{text:"Flagella movement",correct:false},
{text:"Peptidoglycan breakdown",correct:false},
{text:"Slime production",correct:false}
],
explanation:"Mesosomes (chondroids) are convoluted or multilaminated membranous bodies formed as invaginations of the plasma mem brane into the cytoplasm."
}, 
// 159
{
question:"The bacterial protoplast is bounded by the:",
answers:[
{text:"Capsule",correct:false},
{text:"Cell wall",correct:false},
{text:"Plasma membrane",correct:true},
{text:"Flagella",correct:false},
{text:"Pili",correct:false}
],
explanation:"The cytoplasmic (plasma) membrane limits the bacterial protoplast."
},
// 160
{
question:"Osmotic stability is mainly provided by:",
answers:[
{text:"Ribosomes",correct:false},
{text:"Capsule",correct:false},
{text:"Cell wall",correct:true},
{text:"Pili",correct:false},
{text:"Mesosomes",correct:false}
],
explanation:"Functions of the cell wall: 1. To impart shape and rigidity to the cell. 2. Supports the weak cytoplasmic membrane against the high internal osmotic pressure of the protoplasm. 3. Maintains the characteristic shape of the bacterium. 4. Takes part in cell division. 5. Also function in interactions (e.g. adhesion) with other bacteria and with mammalian cells. 6. Provide specific protein and carbohydrate receptors for the attachment of some bacterial viruses."
},
// 161
{
question:"Flagella are generally:",
answers:[
{text:"Shorter than pili",correct:false},
{text:"Longer than pili",correct:true},
{text:"Invisible under electron microscope",correct:false},
{text:"Found only in Gram-positive",correct:false},
{text:"Present in all bacteria",correct:false}
],
explanation:"Explanation text"
},
// 162
{
question:"Fimbriae are mostly associated with:",
answers:[
{text:"Motility",correct:false},
{text:"ATP synthesis",correct:false},
{text:"Adhesion",correct:true},
{text:"DNA replication",correct:false},
{text:"Gram reaction",correct:false}
],
explanation:"Many gram-negative bacteria have short, fine, hair like surface appendages called fimbriae or pili depending on their function. They are shorter and thinner than flagella."
},
// 163
{
question:"The Gram stain is most useful because it:",
answers:[
{text:"Shows capsule only",correct:false},
{text:"Classifies bacteria into two major groups",correct:true},
{text:"Shows motility",correct:false},
{text:"Detects acid-fastness",correct:false},
{text:"Identifies viruses",correct:false}
],
explanation:"Gram stain is one of the most useful staining procedures because it classifies bacteria into two large groups: gram-positive and gram-negative."
},
// 164
{
question:"The background in negative staining is:",
answers:[
{text:"Colorless",correct:false},
{text:"Uniformly colored",correct:true},
{text:"Patterned",correct:false},
{text:"Transparent",correct:false},
{text:"Granular",correct:false}
],
explanation:"In Negative Staining bacteria are mixed with dyes, such as Indian ink or nigrosin that provide a uniformly colored background against which the unstained bacteria stand out in contrast. This is particularly useful in the demonstration of bacterial capsules, which do not take simple stains."
},
// 165
{
question:"The cytoplasm may contain:",
answers:[
{text:"Teichoic acid",correct:false},
{text:"Lipopolysaccharide",correct:false},
{text:"Granules or inclusions",correct:true},
{text:"Flagella",correct:false},
{text:"Outer membrane",correct:false}
],
explanation:"The cytoplasm of the bacterial cell is a viscous watery solution or soft gel, containing a variety of organic or inorganic solutes, and numerous ribosomes and polysomes. The cytoplasm may contain granules or inclusions."
},
// 166
{
question:"Peptidoglycan is:",
answers:[
{text:"Thicker in Gram-negative",correct:false},
{text:"Thicker in Gram-positive",correct:true},
{text:"Absent in bacteria",correct:false},
{text:"Present only in capsules",correct:false},
{text:"Present only in ribosomes",correct:false}
],
explanation:"Peptidoglycan: It is thicker and stronger (more extensively crosslinked) than those of gram-negative bacteria."
},
// 167
{
question:"Gram-negative bacteria are decolorized by:",
answers:[
{text:"Heat",correct:false},
{text:"Water",correct:false},
{text:"Organic solvents",correct:true},
{text:"Acid",correct:false},
{text:"Light",correct:false}
],
explanation:"Gram-negative bacteria are decolorized by organic solvents (acetone/alcohol) and, therefore, take the counterstain, appearing red."
},
// 168
{
question:"Safranin functions as:",
answers:[
{text:"Primary stain",correct:false},
{text:"Counterstain",correct:true},
{text:"Acid-fast dye",correct:false},
{text:"Capsule stain",correct:false},
{text:"Silver impregnation agent",correct:false}
],
explanation:"Some of the simple stains commonly used in the laboratory are methylene blue, carbolfuchsin, crystal violet, and safranin. They provide color contrast, but impart the same color to all bacteria."
},
// 169
{
question:"Carbol fuchsin is commonly used in:",
answers:[
{text:"Gram stain",correct:false},
{text:"Negative stain",correct:false},
{text:"Acid-fast stain",correct:true},
{text:"Capsule stain",correct:false},
{text:"Flagella stain",correct:false}
],
explanation:"Explanation text"
},
// 170
{
question:"The bacterial cell wall is:",
answers:[
{text:"Completely rigid and brittle",correct:false},
{text:"Completely elastic",correct:false},
{text:"Rigid with some elasticity",correct:true},
{text:"Gel-like",correct:false},
{text:"Absent in all bacteria",correct:false}
],
explanation:"The cell wall is the layer that lies just outside the plasma membrane, is strong and relatively rigid, though with some elasticity, and openly porous."
},
// 171
{
question:"The plasma membrane plays a role in:",
answers:[
{text:"Peptidoglycan thickness",correct:false},
{text:"ATP production",correct:true},
{text:"Gram reaction",correct:false},
{text:"Capsule staining",correct:false},
{text:"Silver deposition",correct:false}
],
explanation:"<b>Functions of Cytoplasmic Membrane:</b> i. Semipermeable membrane: controlling the inflow and outflow of metabolites to and from the protoplasm ii. Housing enzymes iii. Housing many sensory and chemotaxis proteins. iv. <b>Generation of chemical energy (i.e. ATP)</b> v. Cell motility vi. Mediation of chromosomal segregation during replication."
},
// 172
{
question:"Microcapsules are:",
answers:[
{text:"Thick capsules",correct:false},
{text:"Visible under light microscope",correct:false},
{text:"Too thin to be seen under light microscope",correct:true},
{text:"Slime layers",correct:false},
{text:"Ribosomal aggregates",correct:false}
],
explanation:"Capsules too thin to be seen under the light microscope are called microcapsules."
},
// 173
{
question:"Streptococcus pneumoniae is listed as:",
answers:[
{text:"Non-capsulated",correct:true},
{text:"Spiral",correct:false},
{text:"Acid-fast",correct:false},
{text:"Gram-negative only",correct:false},
{text:"Mycoplasma",correct:false}
],
explanation:"<b>Non-capsulated bacteria:</b> Streptococcus pneu moniae, several groups of streptococci, Neisseria menin gitidis, Klebsiella, Haemophilus influenzae, Yersinia and Bacillus."
},
// 174
{
question:"The structural strength of Gram-positive bacteria is largely due to:",
answers:[
{text:"Lipopolysaccharide",correct:false},
{text:"Thin peptidoglycan",correct:false},
{text:"Thick peptidoglycan",correct:true},
{text:"Capsule",correct:false},
{text:"Ribosomes",correct:false}
],
explanation:"Wall In gram-positive bacteria, the cell wall consists mainly of peptidoglycan and teichoic acids. Peptidoglycan: It is thicker and stronger (more extensively crosslinked) than those of gram-negative bacteria."
},
// 175
{
question:"The most fundamental morphological classification of bacteria is based on:",
answers:[
{text:"Staining",correct:false},
{text:"Arrangement",correct:false},
{text:"Shape",correct:true},
{text:"Capsule",correct:false},
{text:"Ribosome number",correct:false}
],
explanation:"The most fundamental morphological classification of bacteria is based on shape."
},
// 176
// PRINCIPLES OF BACTERIAL GROWTH
//================================
{
question:"Growth of bacteria is best defined as:",
answers:[
{text:"Increase in colony size only",correct:false},
{text:"Increase in number of dead cells",correct:false},
{text:"Orderly increase of all chemical constituents of the cell",correct:true},
{text:"Random multiplication of cells",correct:false},
{text:"Increase in metabolic waste",correct:false}
],
explanation:"Explanation text"
},
// 177
{
question:"Bacterial growth involves:",
answers:[
{text:"Only increase in cell number",correct:false},
{text:"Only increase in cell size",correct:false},
{text:"Increase in both size and number of cells",correct:true},
{text:"DNA replication without division",correct:false},
{text:"Formation of spores only",correct:false}
],
explanation:"Bacterial growth involves both an <b>increase in the size of individuals and increase in the number</b> of individuals."
},
// 178
{
question:"Bacteria divide primarily by:",
answers:[
{text:"Budding",correct:false},
{text:"Binary fission",correct:true},
{text:"Conjugation",correct:false},
{text:"Meiosis",correct:false},
{text:"Fragmentation",correct:false}
],
explanation:"Bacteria divide by <b>binary fission</b> where individual cells enlarge and divide to yield two progeny of approximately equal size."
},
// 179
{
question:"Binary fission results in:",
answers:[
{text:"Two unequal daughter cells",correct:false},
{text:"Four progeny cells",correct:false},
{text:"Two progeny of approximately equal size",correct:true},
{text:"Multiple spores",correct:false},
{text:"A dormant cyst",correct:false}
],
explanation:"Bacteria divide by binary fission where individual cells enlarge and divide to <b>yield two progeny</b> of approximately equal size."
},
// 180
{
question:"Total bacterial count includes:",
answers:[
{text:"Only living bacteria",correct:false},
{text:"Only culturable bacteria",correct:false},
{text:"Only pathogenic bacteria",correct:false},
{text:"Both living and dead bacteria",correct:true},
{text:"Only anaerobic bacteria",correct:false}
],
explanation:"<b>Bacterial count. Total count:</b> This is total number of bacteria present in a specimen irrespective of whether they are living or dead. Viable count: This measures only viable (living) cells, which are capable of growing and producing a colony on a suitable medium."
},
// 181
{
question:"Viable count measures:",
answers:[
{text:"All bacteria microscopically visible",correct:false},
{text:"Living cells capable of colony formation",correct:true},
{text:"Dead bacteria",correct:false},
{text:"Spores only",correct:false},
{text:"Bacterial toxins",correct:false}
],
explanation:"<b>Bacterial count:</b> Total count: This is total number of bacteria present in a specimen irrespective of whether they are living or dead. <b>Viable count:</b> This measures only viable (living) cells, which are capable of growing and producing a colony on a suitable medium."
},
// 182
{
question:"A viable count of a bacteria is determined based on:",
answers:[
{text:"Turbidity only",correct:false},
{text:"Microscopic examination",correct:false},
{text:"Colony formation on suitable medium",correct:true},
{text:"Gram staining",correct:false},
{text:"Cell size",correct:false}
],
explanation:"<b>Bacterial count:</b> Total count: This is total number of bacteria present in a specimen irrespective of whether they are living or dead. <b>Viable count:</b> This measures only viable (living) cells, which are capable of growing and producing a colony on a suitable medium."
},
// 183
{
question:"The lag phase of bacterial growth is characterized by:",
answers:[
{text:"Rapid cell division",correct:false},
{text:"Immediate exponential growth",correct:false},
{text:"No increase in cell number",correct:true},
{text:"Massive cell death",correct:false},
{text:"Spore formation",correct:false}
],
explanation:"When microorganisms are introduced into fresh culture medium, usually no immediate increase in cell number occurs, and therefore, this period is called the <b>lag phase</b>. During this time, however, the cells are not dormant."
},
// 184
{
question:"During lag phase of bacterial growth, cells are:",
answers:[
{text:"Dormant",correct:false},
{text:"Actively dividing",correct:false},
{text:"Metabolically active but not dividing",correct:true},
{text:"Dead",correct:false},
{text:"Sporulating",correct:false}
],
explanation:"When microorganisms are introduced into fresh culture medium, usually no immediate increase in cell number occurs, and therefore, this period is called the <b>lag phase</b>. During this time, however, the cells are not dormant."
},
// 185
{
question:"The exponential phase of bacterial growth is also called:",
answers:[
{text:"Stationary phase",correct:false},
{text:"Logarithmic phase",correct:true},
{text:"Death phase",correct:false},
{text:"Dormant phase",correct:false},
{text:"Maturation phase",correct:false}
],
explanation:"Log (<b>logarithmic</b>) or Exponential Phase. Following the lag phase, the cells start dividing and their numbers increase exponentially or by geometric progression with time."
},
// 186
{
question:"During log phase of bacterial growth, bacterial numbers increase:",
answers:[
{text:"Linearly",correct:false},
{text:"Randomly",correct:false},
{text:"Exponentially",correct:true},
{text:"Slowly",correct:false},
{text:"Irregularly",correct:false}
],
explanation:"Following the lag phase, the cells start dividing and their numbers increase <b>exponentially or by geometric progression with time</b>. "
},
// 187
{
question:"Stationary phase of bacterial growth occurs due to:",
answers:[
{text:"Excess oxygen",correct:false},
{text:"Increased moisture",correct:false},
{text:"Nutrient depletion and toxic accumulation",correct:true},
{text:"Increased pH",correct:false},
{text:"Decreased temperature",correct:false}
],
explanation:"Stationary Phase. After a varying period of exponential growth, cell division stops due to <b>depletion of nutrients and accumulation of toxic products</b>. Eventually growth slows down, and the total bacterial cell number reaches a maximum and stabilizes. The growth curve becomes horizontal."
},
// 188
{
question:"In stationary phase of bacterial growth, the growth curve becomes:",
answers:[
{text:"Vertical",correct:false},
{text:"Irregular",correct:false},
{text:"Horizontal",correct:true},
{text:"Declining",correct:false},
{text:"Parabolic",correct:false}
],
explanation:"Stationary Phase. After a varying period of exponential growth, cell division stops due to depletion of nutrients and accumulation of toxic products. Eventually growth slows down, and the total bacterial cell number reaches a maximum and stabilizes. The growth curve becomes <b>horizontal</b>."
},
// 189
{
question:"Death phase in bacterial growth is characterized by:",
answers:[
{text:"Maximum cell division",correct:false},
{text:"Stable population",correct:false},
{text:"Increase in viable cells",correct:false},
{text:"Decrease in population due to cell death",correct:true},
{text:"Sporulation only",correct:false}
],
explanation:"The death phase is the period when the <b>population decreases</b> due to cell death. Cell death may also be caused by autolysis besides nutrient deprivation and buildup of toxic wastes."
},
// 190
{
question:"Autolysis refers to:",
answers:[
{text:"Oxygen toxicity",correct:false},
{text:"Self-digestion of bacterial cells",correct:true},
{text:"Nutrient synthesis",correct:false},
{text:"Sporulation",correct:false},
{text:"Cell enlargement",correct:false}
],
explanation:"Autolysis is a biological process in which a cell self-digests through the action of its own enzymes."
},
// 191
{
question:"Minimum nutritional requirements include all EXCEPT:",
answers:[
{text:"Water",correct:false},
{text:"Carbon source",correct:false},
{text:"Nitrogen source",correct:false},
{text:"Vitamins only",correct:true},
{text:"Inorganic salts",correct:false}
],
explanation:"The minimum nutritional requirements for growth and multiplication of bacteria are <b>water, a source of carbon, a source of nitrogen and some inorganic salts</b>. The requirements for microbial growth can be divided into two main categories: chemical and physical. Chemical requirements include sources of carbon, nitro gen, sulfur, phosphorus, trace elements, oxygen, and organic growth factors."
},
// 192
{
question:"Chemical growth requirements include:",
answers:[
{text:"Light and temperature",correct:false},
{text:"Carbon and nitrogen",correct:true},
{text:"Moisture and pH",correct:false},
{text:"Sonic stress",correct:false},
{text:"Mechanical force",correct:false}
],
explanation:"The minimum nutritional requirements for growth and multiplication of bacteria are water, a source of carbon, a source of nitrogen and some inorganic salts. The requirements for microbial growth can be divided into two main categories: chemical and physical. Chemical requirements include sources of <b>carbon, nitro gen, sulfur, phosphorus, trace elements, oxygen, and organic growth factors</b>."
},
// 193
{
question:"Pathogenic bacteria for humans usually grow best at:",
answers:[
{text:"25°C",correct:false},
{text:"30°C",correct:false},
{text:"37°C",correct:true},
{text:"45°C",correct:false},
{text:"50°C",correct:false}
],
explanation:"Bacteria pathogenic for humans usually grow at <b>37°C (our body temperature)</b.. "
},
// 194
{
question:"Mesophilic bacteria grow between:",
answers:[
{text:"–5 to 10°C",correct:false},
{text:"10 to 45°C",correct:true},
{text:"25 to 80°C",correct:false},
{text:"50 to 100°C",correct:false},
{text:"0 to 100°C",correct:false}
],
explanation:"Bacteria which grow between 10°C and 45°C, with optimal growth between 20–40˚C. Examples: All parasites of warm blooded animals are mesophilic."
},
// 195
{
question:"Optimal growth of mesophiles occurs between:",
answers:[
{text:"0–10°C",correct:false},
{text:"10–20°C",correct:false},
{text:"20–40°C",correct:true},
{text:"40–60°C",correct:false},
{text:"60–80°C",correct:false}
],
explanation:"Bacteria which grow between 10°C and 45°C, with <b>optimal growth between 20–40˚C</b>. Examples: All parasites of warm blooded animals are mesophilic."
},
// 196
{
question:"Psychrophilic bacteria grow optimally at:",
answers:[
{text:"37°C",correct:false},
{text:"50°C",correct:false},
{text:"10–20°C",correct:true},
{text:"45°C",correct:false},
{text:"60°C",correct:false}
],
explanation:"Psychrophilic bacteria (cold loving) are organisms that grow between –5 to 30°C, <b>optimum at 10 to 20˚C</b>. Examples: They are soil and water saprophytes."
},
// 197
{
question:"Thermophiles grow optimally at:",
answers:[
{text:"10°C",correct:false},
{text:"25°C",correct:false},
{text:"37°C",correct:false},
{text:"50–60°C",correct:true},
{text:"90°C",correct:false}
],
explanation:"Thermophiles (heat loving) have growth range 25–80˚C, <b>optimum at 50–60°C</b>. Examples: Some thermophiles (like Bacillus stearothermophiles)."
},
// 198
{
question:"An example of a thermophile is:",
answers:[
{text:"Vibrio cholerae",correct:false},
{text:"Clostridium tetani",correct:false},
{text:"Bacillus stearothermophiles",correct:true},
{text:"Lactobacillus",correct:false},
{text:"Campylobacter",correct:false}
],
explanation:"Thermophiles (heat loving) have growth range 25–80˚C, optimum at 50–60°C. Examples: Some thermophiles (like <b>Bacillus stearothermophiles</b>)"
},
// 199
{
question:"Aerobic bacteria:",
answers:[
{text:"Die in oxygen",correct:false},
{text:"Grow only without oxygen",correct:false},
{text:"Require oxygen for growth",correct:true},
{text:"Require carbon dioxide only",correct:false},
{text:"Are all pathogenic",correct:false}
],
explanation:"Aerobic bacteria: They require oxygen for growth"
},
// 200
{
question:"An example of obligate aerobe is:",
answers:[
{text:"Clostridium tetani",correct:false},
{text:"Cholera vibrio",correct:true},
{text:"Lactobacillus",correct:false},
{text:"Brucella abortus",correct:false},
{text:"Campylobacter",correct:false}
],
explanation:"Obligate aerobes: They have an absolute or obligate requirement for oxygen (O2), like the cholera vibrio. "
},
// 201 
{
question:"Most medically important bacteria are:",
answers:[
{text:"Obligate aerobes",correct:false},
{text:"Obligate anaerobes",correct:false},
{text:"Facultative anaerobes",correct:true},
{text:"Psychrophiles",correct:false},
{text:"Thermophiles",correct:false}
],
explanation:"Facultative anaerobes: They are ordinarily aerobic but can also grow in the absence of oxygen, though less abundantly. Most bacteria of medical importance are facultative anaerobes."
},
// 202 
{
question:"Microaerophilic organisms grow best at:",
answers:[
{text:"High oxygen tension",correct:false},
{text:"No oxygen",correct:false},
{text:"Low oxygen tension",correct:true},
{text:"D",correct:false},
{text:"E",correct:false}
],
explanation:"Microaerophilic organisms: They grow best at low oxygen tension, e.g. Campylobacter species."
},
// 203
{
question:"An example of microaerophilic organism is:",
answers:[
{text:"Clostridium tetani",correct:false},
{text:"Campylobacter species",correct:true},
{text:"Vibrio cholerae",correct:false},
{text:"Bacillus stearothermophiles",correct:false},
{text:"Lactobacillus",correct:false}
],
explanation:"Microaerophilic organisms: They grow best at low oxygen tension, e.g. Campylobacter species."
},

// 204
{
question:"Obligate anaerobes:",
answers:[
{text:"Require oxygen",correct:false},
{text:"Grow best in high oxygen",correct:false},
{text:"Die upon exposure to oxygen",correct:true},
{text:"Require CO₂",correct:false},
{text:"Are all mesophilic",correct:false}
],
explanation:"Obligate anaerobes may even die on exposure to oxygen, e.g. Clostridium tetani."
},
// 205
{
question:"Example of obligate anaerobe:",
answers:[
{text:"Vibrio cholerae",correct:false},
{text:"Campylobacter",correct:false},
{text:"Clostridium tetani",correct:true},
{text:"Brucella abortus",correct:false},
{text:"Lactobacillus",correct:false}
],
explanation:"Obligate anaerobes may even die on exposure to oxygen, e.g. Clostridium tetani."
},
// 206
{
question:"Capnophilic organisms require:",
answers:[
{text:"High oxygen",correct:false},
{text:"High nitrogen",correct:false},
{text:"High carbon dioxide (5–10%)",correct:true},
{text:"High pH",correct:false},
{text:"High temperature",correct:false}
],
explanation:"Some organisms, such as Brucella abortus, require much higher levels of carbon dioxide (5–10%) for growth, especially on fresh isolation (capnophilic)."
},
// 207
{
question:"An example of capnophilic organism:",
answers:[
{text:"Brucella abortus",correct:true},
{text:"Clostridium tetani",correct:false},
{text:"Vibrio cholerae",correct:false},
{text:"Campylobacter",correct:false},
{text:"Lactobacillus",correct:false}
],
explanation:"Some organisms, such as Brucella abortus, require much higher levels of carbon dioxide (5–10%) for growth, especially on fresh isolation (capnophilic)."
},
// 208
{
question:"Most pathogenic bacteria grow best at pH:",
answers:[
{text:"4–5",correct:false},
{text:"5–6",correct:false},
{text:"7.2–7.6",correct:true},
{text:"8.5–9.5",correct:false},
{text:"10",correct:false}
],
explanation:"Most pathogenic bacteria grow best at a neutral or slightly alkaline pH (7.2 to 7.6). Some acidophilic bacteria, such as lactobacilli grow under acidic conditions while cholera vibrio, grow at high degrees of alkalinity."
},
// 209
{
question:"Acidophilic bacteria example:",
answers:[
{text:"Vibrio cholerae",correct:false},
{text:"Lactobacilli",correct:false},
{text:"Clostridium tetani",correct:true},
{text:"Bacillus stearothermophiles",correct:false},
{text:"Brucella abortus",correct:false}
],
explanation:"Explanation text"
},
// 210
{
question:"Vibrio cholerae grows best at:",
answers:[
{text:"Acidic pH",correct:false},
{text:"Neutral pH only",correct:false},
{text:"High alkalinity",correct:true},
{text:"Low temperature",correct:false},
{text:"No oxygen",correct:false}
],
explanation:"Most pathogenic bacteria grow best at a neutral or slightly alkaline pH (7.2 to 7.6). Some acidophilic bacteria, such as lactobacilli grow under acidic conditions while cholera vibrio, grow at high degrees of alkalinity."
},
// 211
{
question:"Darkness favors bacterial:",
answers:[
{text:"Death",correct:false},
{text:"Sporulation only",correct:false},
{text:"Growth and viability",correct:true},
{text:"Mutation",correct:false},
{text:"Toxin destruction",correct:false}
],
explanation:"Darkness provides a favorable condition for growth and viability of bacteria."
},
// 212
{
question:"Bacteria tolerate osmotic variation due to:",
answers:[
{text:"Capsule",correct:false},
{text:"Flagella",correct:false},
{text:"Cell wall strength",correct:true},
{text:"Ribosomes",correct:false},
{text:"Cytoplasm",correct:false}
],
explanation:"Bacteria are more tolerant to osmotic variation because of the mechanical strength of the cell wall."
},
// 213
{
question:"Mechanical stress may cause:",
answers:[
{text:"Sporulation",correct:false},
{text:"Enhanced growth",correct:false},
{text:"Cell rupture",correct:true},
{text:"Increased pH",correct:false},
{text:"Colony pigmentation",correct:false}
],
explanation:"In spite of tough walls of bacteria, they may be ruptured by mechanical stress such as grinding or vigorous shaking with glass beads."
},
// 214
{
question:"Sonic stress affects bacteria by:",
answers:[
{text:"Increasing growth rate",correct:false},
{text:"Causing rupture",correct:true},
{text:"Enhancing division",correct:false},
{text:"Producing spores",correct:false},
{text:"Stabilizing membrane",correct:false}
],
explanation:"Mechanical and sonic stresses may cause bacterial cell wall rupture such as grinding or vigorous shaking with glass beads."
},
// 215
{
question:"During exponential phase, bacteria divide in:",
answers:[
{text:"Arithmetic progression",correct:false},
{text:"Geometric progression",correct:true},
{text:"Random pattern",correct:false},
{text:"Irregular waves",correct:false},
{text:"Constant rate without increase",correct:false}
],
explanation:"Following the lag phase, the cells start dividing and their numbers increase exponentially or by geometric progression with time. "
},
// STAPHYLOCOCCUS
//================
// 216
{
question:"Staphylococci are:",
answers:[
{text:"Gram-negative bacilli",correct:false},
{text:"Gram-positive cocci",correct:true},
{text:"Gram-negative cocci",correct:false},
{text:"Acid-fast bacilli",correct:false},
{text:"Spirochetes",correct:false}
],
explanation:"Staphylococci are gram-positive cocci that occur in grape-like clusters. The genus name Staphylococcus (Sta-phle, in Greek, meaning ‘bunch of grapes’: kokkos, meaning a berry)."
},
// 217
{
question:"Staphylococci characteristically appear microscopically as:",
answers:[
{text:"Chains",correct:false},
{text:"Diplococci",correct:false},
{text:"Grape-like clusters",correct:true},
{text:"Tetrads",correct:false},
{text:"Palisades",correct:false}
],
explanation:"Staphylococci are gram-positive cocci that occur in grape-like clusters. The genus name Staphylococcus (Sta-phle, in Greek, meaning ‘bunch of grapes’: kokkos, meaning a berry)."
},
// 218
{
question:"The term “Staphylococcus” is derived from Greek meaning:",
answers:[
{text:"Round chains",correct:false},
{text:"Berry clusters",correct:false},
{text:"Bunch of grapes",correct:true},
{text:"Golden sphere",correct:false},
{text:"Clustered rods",correct:false}
],
explanation:"Staphylococci are gram-positive cocci that occur in grape-like clusters. The genus name Staphylococcus (Sta-phle, in Greek, meaning ‘bunch of grapes’: kokkos, meaning a berry)."
},
// 219
{
question:"The average diameter of Staphylococcus aureus is approximately:",
answers:[
{text:"0.1 μm",correct:false},
{text:"0.5 μm",correct:false},
{text:"1 μm",correct:true},
{text:"5 μm",correct:false},
{text:"10 μm",correct:false}
],
explanation:"Staphylococcus aureus. They are spherical cocci, approximately 1 μm in diameter, arranged characteristically in grape-like clusters. They are non-sporing, non-motile and usually non-capsulate with the exception of rare strains."
},
// 220
{
question:"S. aureus is:",
answers:[
{text:"Motile and spore-forming",correct:false},
{text:"Encapsulated and motile",correct:false},
{text:"Non-motile and non-sporing",correct:true},
{text:"Spore-forming anaerobe",correct:false},
{text:"Acid-fast organism",correct:false}
],
explanation:"Staphylococcus aureus. They are spherical cocci, approximately 1 μm in diameter, arranged characteristically in grape-like clusters. They are non-sporing, non-motile and usually non-capsulate with the exception of rare strains."
},
// 221 
{
question:"Capsule in S. aureus is:",
answers:[
{text:"Always present",correct:false},
{text:"Never present",correct:false},
{text:"Present in rare strains",correct:true},
{text:"Present in all virulent strains",correct:false},
{text:"Present only in MRSA",correct:false}
],
explanation:"Staphylococcus aureus. They are spherical cocci, approximately 1 μm in diameter, arranged characteristically in grape-like clusters. They are non-sporing, non-motile and usually non-capsulate with the exception of rare strains."
},
// 222 
{
question:"S. aureus can grow as:",
answers:[
{text:"Strict anaerobe only",correct:false},
{text:"Strict aerobe only",correct:false},
{text:"Aerobe and facultative anaerobe",correct:true},
{text:"Microaerophile only",correct:false},
{text:"Obligate intracellular organism",correct:false}
],
explanation:"Staphylococcus aureus are aerobes and facultative anaerobes. They can grow readily on ordinary media. S. aureus are among the hardiest of the non-sporing bacteria"
},
// 223 
{
question:"S. aureus can grow:",
answers:[
{text:"Only on enriched media",correct:false},
{text:"Only in CO₂ incubator",correct:false},
{text:"Readily on ordinary media",correct:true},
{text:"Only on selective media",correct:false},
{text:"Only at 4°C",correct:false}
],
explanation:"Staphylococcus aureus are aerobes and facultative anaerobes. They can grow readily on ordinary media. S. aureus are among the hardiest of the non-sporing bacteria"
},
// 224 
{
question:"S. aureus is considered:",
answers:[
{text:"Fragile non-sporing bacteria",correct:false},
{text:"Hardiest of non-sporing bacteria",correct:true},
{text:"Obligate parasite",correct:false},
{text:"Spore-forming resistant organism",correct:false},
{text:"Acid-fast resistant",correct:false}
],
explanation:"Staphylococcus aureus are aerobes and facultative anaerobes. They can grow readily on ordinary media. S. aureus are among the hardiest of the non-sporing bacteria"
},
// 225 
{
question:"S. aureus has been isolated from dried pus after:",
answers:[
{text:"1 week",correct:false},
{text:"2 weeks",correct:false},
{text:"1 month",correct:false},
{text:"2–3 months",correct:true},
{text:"1 year",correct:false}
],
explanation:"S. aureus have been isolated from dried pus after 2–3 months. It withstands moist heat at 60°C for 30 minutes but is killed after 60 minutes."
},
// 226 
{
question:"S. aureus withstands moist heat at 60°C for:",
answers:[
{text:"10 minutes",correct:false},
{text:"15 minutes",correct:false},
{text:"30 minutes",correct:true},
{text:"60 minutes",correct:false},
{text:"2 hours",correct:false}
],
explanation:"S. aureus have been isolated from dried pus after 2–3 months. It withstands moist heat at 60°C for 30 minutes but is killed after 60 minutes."
},
// 227 
{
question:"S. aureus is killed at 60°C after:",
answers:[
{text:"10 minutes",correct:false},
{text:"20 minutes",correct:false},
{text:"30 minutesC",correct:false},
{text:"60 minutes",correct:true},
{text:"90 minutes",correct:false}
],
explanation:"S. aureus have been isolated from dried pus after 2–3 months. It withstands moist heat at 60°C for 30 minutes but is killed after 60 minutes."
},
// 228 
{
question:"Protein A is:",
answers:[
{text:"A toxin",correct:false},
{text:"An enzyme",correct:false},
{text:"A group-specific antigen",correct:true},
{text:"A pigment",correct:false},
{text:"A capsule component only",correct:false}
],
explanation:"Protein A is a group-specific antigen unique to S. aureus strains."
},
// 229 
{
question:"Protein A is unique to:",
answers:[
{text:"All Staphylococci",correct:false},
{text:"Streptococci",correct:false},
{text:"S. aureus strains",correct:true},
{text:"MRSA only",correct:false},
{text:"Coagulase-negative staphylococci",correct:false}
],
explanation:"Protein A is a group-specific antigen unique to S. aureus strains."
},
// 230 
{
question:"Beta hemolysis on blood agar is characteristic of:",
answers:[
{text:"Streptococcus pyogenes only",correct:false},
{text:"S. aureus",correct:true},
{text:"Lactobacillus",correct:false},
{text:"Clostridium",correct:false},
{text:"Neisseria",correct:false}
],
explanation:"Staphylococcus aureus strains usually exhibit the following characteristics: 1. Beta hemolysis on blood agar 2. Golden yellow pigment 3. Coagulase positive 4. Mannitol fermentation 5. Gelatin liquefaction 6. Phosphatase production 7. Black colonies on potassium tellurite blood agar 8. Produce thermostable nucleases which can be demonstrated by the ability of boiled cultures to degrade DNA in an agar diffusion test."
},
// 231 
{
question:"The pigment produced by S. aureus colonies is:",
answers:[
{text:"Red",correct:false},
{text:"Green",correct:false},
{text:"Blue",correct:false},
{text:"Golden yellow",correct:true},
{text:"White",correct:false}
],
explanation:"Staphylococcus aureus strains usually exhibit the following characteristics: 1. Beta hemolysis on blood agar 2. Golden yellow pigment 3. Coagulase positive 4. Mannitol fermentation 5. Gelatin liquefaction 6. Phosphatase production 7. Black colonies on potassium tellurite blood agar 8. Produce thermostable nucleases which can be demonstrated by the ability of boiled cultures to degrade DNA in an agar diffusion test."
},
// 232 
{
question:"Coagulase test in S. aureus is usually:",
answers:[
{text:"Negative",correct:false},
{text:"Weakly positive",correct:false},
{text:"Positive",correct:true},
{text:"Variable",correct:false},
{text:"Indeterminate",correct:false}
],
explanation:"Staphylococcus aureus strains usually exhibit the following characteristics: 1. Beta hemolysis on blood agar 2. Golden yellow pigment 3. Coagulase positive 4. Mannitol fermentation 5. Gelatin liquefaction 6. Phosphatase production 7. Black colonies on potassium tellurite blood agar 8. Produce thermostable nucleases which can be demonstrated by the ability of boiled cultures to degrade DNA in an agar diffusion test."
},
// 233 
{
question:"S. aureus ferments:",
answers:[
{text:"Lactose",correct:false},
{text:"Mannitol",correct:true},
{text:"Sucrose",correct:false},
{text:"Maltose",correct:false},
{text:"Glucose only",correct:false}
],
explanation:"Staphylococcus aureus strains usually exhibit the following characteristics: 1. Beta hemolysis on blood agar 2. Golden yellow pigment 3. Coagulase positive 4. Mannitol fermentation 5. Gelatin liquefaction 6. Phosphatase production 7. Black colonies on potassium tellurite blood agar 8. Produce thermostable nucleases which can be demonstrated by the ability of boiled cultures to degrade DNA in an agar diffusion test."
},
// 234 
{
question:"Black colonies on potassium tellurite blood agar indicate:",
answers:[
{text:"MRSA",correct:false},
{text:"Streptococcus",correct:false},
{text:"S. aureus",correct:true},
{text:"Pseudomonas",correct:false},
{text:"Enterococcus",correct:false}
],
explanation:"Staphylococcus aureus strains usually exhibit the following characteristics: 1. Beta hemolysis on blood agar 2. Golden yellow pigment 3. Coagulase positive 4. Mannitol fermentation 5. Gelatin liquefaction 6. Phosphatase production 7. Black colonies on potassium tellurite blood agar 8. Produce thermostable nucleases which can be demonstrated by the ability of boiled cultures to degrade DNA in an agar diffusion test."
},
// 235
{
question:"Thermostable nucleases of S. aureus can be demonstrated by:",
answers:[
{text:"Gram stain",correct:false},
{text:"Coagulase test",correct:false},
{text:"Agar diffusion DNA degradation test",correct:true},
{text:"Catalase test",correct:false},
{text:"Oxidase test",correct:false}
],
explanation:"Staphylococcus aureus strains usually exhibit the following characteristics: 1. Beta hemolysis on blood agar 2. Golden yellow pigment 3. Coagulase positive 4. Mannitol fermentation 5. Gelatin liquefaction 6. Phosphatase production 7. Black colonies on potassium tellurite blood agar 8. Produce thermostable nucleases which can be demonstrated by the ability of boiled cultures to degrade DNA in an agar diffusion test."
},
// 236 
{
question:"The number of cytolytic toxins produced by S. aureus is at least:",
answers:[
{text:"Two",correct:false},
{text:"Three",correct:false},
{text:"Four",correct:false},
{text:"Five",correct:true},
{text:"Six",correct:false}
],
explanation:"At least five cytolytic or membrane-damaging toxins (alpha, beta, delta, gamma, and Panton-Valentine [P-V] leukocidin are produced by S. aureus."
},
// 237 
{
question:"Which of the following is NOT a cytolytic toxin?",
answers:[
{text:"Alpha toxin",correct:false},
{text:"Beta toxin",correct:false},
{text:"Gamma toxin",correct:false},
{text:"Delta toxin",correct:false},
{text:"Enterotoxin",correct:true}
],
explanation:"At least five cytolytic or membrane-damaging toxins (alpha, beta, delta, gamma, and Panton-Valentine [P-V] leukocidin are produced by S. aureus."
},
// 238 
{
question:"Panton-Valentine leukocidin is:",
answers:[
{text:"Enzyme",correct:false},
{text:"Membrane-damaging toxin",correct:true},
{text:"Capsule",correct:false},
{text:"Pigment",correct:false},
{text:"Antibiotic",correct:false}
],
explanation:"At least five cytolytic or membrane-damaging toxins (alpha, beta, delta, gamma, and Panton-Valentine [P-V] leukocidin are produced by S. aureus."
},
// 239 
{
question:"Staphylococcal food poisoning is caused by:",
answers:[
{text:"Alpha toxin",correct:false},
{text:"Coagulase",correct:false},
{text:"Enterotoxin",correct:true},
{text:"Hyaluronidase",correct:false},
{text:"Lipase",correct:false}
],
explanation:"Enterotoxin is responsible for the manifestations of staphylococcal food poisoning."
},
// 240 
{
question:"Toxic shock syndrome (TSS) is initiated by:",
answers:[
{text:"Systemic bacteremia first",correct:false},
{text:"Localized growth of toxin-producing strains",correct:true},
{text:"Viral infection",correct:false},
{text:"Capsule formation",correct:false},
{text:"Biofilm only",correct:false}
],
explanation:"S. aureus is associated with toxic shock syndrome (TSS), is initiated with the localized growth of toxin producing strains of S. aureus in the vagina or a wound, followed by release of the toxin into the bloodstream. "
},
// 241 
{
question:"Coagulase causes:",
answers:[
{text:"Hemolysis",correct:false},
{text:"DNA degradation",correct:false},
{text:"Plasma clotting",correct:true},
{text:"Pigment production",correct:false},
{text:"Capsule synthesis",correct:false}
],
explanation:"S. aureus produces an extracellular enzyme called coagulase that brings about clotting of human or rabbit plasma."
},
// 242 
{
question:"Coagulase enhances virulence by:",
answers:[
{text:"Increasing motility",correct:false},
{text:"Producing spores",correct:false},
{text:"Inhibiting phagocytosis",correct:true},
{text:"Destroying DNA",correct:false},
{text:"Producing pigment",correct:false}
],
explanation:"Coagulase enhances virulence of S. aureus by inhibiting phagocytosis. It forms a wall of fibrin clot around the lesion. Thick creamy pus is formed in staphylococcal infections."
},
// 243 
{
question:"Thick creamy pus in infections is characteristic of:",
answers:[
{text:"Streptococci",correct:false},
{text:"Clostridium",correct:false},
{text:"S. aureus",correct:true},
{text:"Pseudomonas",correct:false},
{text:"Mycobacterium",correct:false}
],
explanation:"Coagulase enhances virulence of S. aureus by inhibiting phagocytosis. It forms a wall of fibrin clot around the lesion. Thick creamy pus is formed in staphylococcal infections."
},
// 244 
{
question:"Hyaluronidase functions to:",
answers:[
{text:"Clot plasma",correct:false},
{text:"Break connective tissue",correct:true},
{text:"Degrade DNA",correct:false},
{text:"Ferment sugar",correct:false},
{text:"Produce pigment",correct:false}
],
explanation:""
},
// 245 
{
question:"Penicillinase produced by S. aureus:",
answers:[
{text:"Enhances pigmentation",correct:false},
{text:"Breaks down penicillin",correct:true},
{text:"Forms capsule",correct:false},
{text:"Causes hemolysis",correct:false},
{text:"Clots plasma",correct:false}
],
explanation:"Staphylococcus aureus produces a number of enzymes such as coagulase catalase, hyaluronidase, fibrinolysin, lipases, nucleases and penicillinase."
},
// 246 
{
question:"Cutaneous infection includes:",
answers:[
{text:"Osteomyelitis",correct:false},
{text:"Endocarditis",correct:false},
{text:"Furuncle",correct:true},
{text:"Septicemia",correct:false},
{text:"Empyema",correct:false}
],
explanation:"Cutaneous Infections: These include: Wound and burn infection, pustules, furuncles or boils, carbuncles, styes, impetigo and pemphigus neonatorum."
},
// 247 
{
question:"Pemphigus neonatorum is classified as:",
answers:[
{text:"Deep infection",correct:false},
{text:"Cutaneous infection",correct:true},
{text:"Toxin-mediated disease",correct:false},
{text:"Systemic disease",correct:false},
{text:"Respiratory infection",correct:false}
],
explanation:"Cutaneous Infections: These include: Wound and burn infection, pustules, furuncles or boils, carbuncles, styes, impetigo and pemphigus neonatorum."
},
// 248 
{
question:"Osteomyelitis caused by S. aureus is:",
answers:[
{text:"Cutaneous",correct:false},
{text:"Superficial",correct:false},
{text:"Deep infection",correct:true},
{text:"Toxin-mediated",correct:false},
{text:"Viral complication",correct:false}
],
explanation:"Deep Infections. These include: Osteomyelitis, periostitis, tonsillitis, pharyngitis, sinusitis, bronchopneumonia, empyema, septicemia, meningitis, endocarditis, breast abscess, renal abscess and abscesses in other organs."
},
// 249 
{
question:"Food poisoning is classified as:",
answers:[
{text:"Deep infection",correct:false},
{text:"Cutaneous infection",correct:false},
{text:"Toxin-mediated disease",correct:true},
{text:"Respiratory infection",correct:false},
{text:"Bone infection",correct:false}
],
explanation:"Explanation text"
},
// 250 
{
question:"The most effective antibiotic for sensitive strains is:",
answers:[
{text:"Vancomycin",correct:false},
{text:"Benzylpenicillin",correct:true},
{text:"Erythromycin",correct:false},
{text:"Bacitracin",correct:false},
{text:"Mupirocin",correct:false}
],
explanation:"Benzylpenicillin is the most effective antibiotic, if the strain is sensitive. Patients allergic to penicillins may be given erythromycin, vancomycin or first-generation cephalosporins. Cloxacillin, oxacillin, flucloxacillin and methicillin are penicillinase-resistant penicillins."
},
// 251 36
{
question:"A penicillin-allergic patient may receive:",
answers:[
{text:"Methicillin",correct:false},
{text:"Cloxacillin",correct:false},
{text:"Erythromycin",correct:true},
{text:"Dicloxacillin",correct:false},
{text:"Flucloxacillin",correct:false}
],
explanation:"Patients allergic to penicillins may be given erythromycin, vancomycin or first-generation cephalosporins.t"
},
// 252 37
{
question:"Methicillin-resistant S. aureus (MRSA) strains are resistant to:",
answers:[
{text:"Only methicillin",correct:false},
{text:"Only benzylpenicillin",correct:false},
{text:"Other penicillins and cephalosporins",correct:true},
{text:"Glycopeptides",correct:false},
{text:"Macrolides only",correct:false}
],
explanation:"Methicillin-resistant S. aureus (MRSA) strains are also resistant to other penicillins and cephalosporins."
},
// 253  38
{
question:"Drug of choice for systemic MRSA infection:",
answers:[
{text:"Penicillin",correct:false},
{text:"Cephalosporin",correct:false},
{text:"Vancomycin",correct:true},
{text:"Bacitracin",correct:false},
{text:"Mupirocin",correct:false}
],
explanation:"Methicillin-resistant S. aureus (MRSA) strains are also resistant to other penicillins and cephalosporins. Glycopeptides (vancomycin or teicoplanin) are the agents of choice in the treatment of systemic infection."
},
// 254 39
{
question:"For cutaneous infections, oral therapy includes:",
answers:[
{text:"Bacitracin",correct:false},
{text:"Vancomycin",correct:false},
{text:"Cloxacillin",correct:true},
{text:"Teicoplanin",correct:false},
{text:"Chlorhexidine",correct:false}
],
explanation:"For cutaneous infections, oral therapy with a semisynthetic penicillin, such as cloxacillin or dicloxacillin, is usually efficacious. "
},
// 255 40
{
question:"Mild superficial lesions may be treated with:",
answers:[
{text:"Methicillin",correct:false},
{text:"Vancomycin",correct:false},
{text:"Bacitracin",correct:true},
{text:"Teicoplanin",correct:false},
{text:"Benzylpenicillin",correct:false}
],
explanation:"For mild superficial lesions, topical applications of drugs not used systemically, as bacitracin, chlorhexidine or mupirocin may be sufficient."
},
// 256 1
// STAPHYLOCOCCUS EPIDERMIDIS, S. SAPROPHYTICUS & MRSA
// ===================================================
{
question:"Staphylococcus epidermidis is:",
answers:[
{text:"Rarely found on human skin",correct:false},
{text:"Invariably present on normal human skin",correct:true},
{text:"Found only in hospital environments",correct:false},
{text:"Found only in urinary tract",correct:false},
{text:"Found only in wounds",correct:false}
],
explanation:"Staphylococcus epidermidis is invariably present on normal human skin. It is nonpathogenic ordinarily but can cause disease when the host defenses are breached."
},
// 257 2
{
question:"Under ordinary conditions, S. epidermidis is:",
answers:[
{text:"Highly virulent",correct:false},
{text:"Obligate pathogen",correct:false},
{text:"Nonpathogenic",correct:true},
{text:"Toxin-producing",correct:false},
{text:"Spore-forming",correct:false}
],
explanation:"Staphylococcus epidermidis is invariably present on normal human skin. It is nonpathogenic ordinarily but can cause disease when the host defenses are breached."
},
// 258 3
{
question:"S. epidermidis most commonly causes disease when:",
answers:[
{text:"The patient is febrile",correct:false},
{text:"Host defenses are breached",correct:true},
{text:"The patient is dehydrated",correct:false},
{text:"The organism produces enterotoxin",correct:false},
{text:"The organism forms spores",correct:false}
],
explanation:"Staphylococcus epidermidis is invariably present on normal human skin. It is nonpathogenic ordinarily but can cause disease when the host defenses are breached."
},
// 259 4
{
question:"S. epidermidis shows a distinct predilection for:",
answers:[
{text:"Respiratory epithelium",correct:false},
{text:"Gastrointestinal mucosa",correct:false},
{text:"Foreign bodies",correct:true},
{text:"Skin folds",correct:false},
{text:"Synovial fluid only",correct:false}
],
explanation:"S. epidermidis has a distinct predilection for foreign bodies, such as artificial heart valves, indwelling intravascular catheters, central nervous system shunts, and hip prostheses."
},
// 260 5
{
question:"Which of the following is commonly associated with S. epidermidis infection?",
answers:[
{text:"Artificial heart valves",correct:true},
{text:"Tonsils",correct:false},
{text:"Liver",correct:false},
{text:"Colon",correct:false},
{text:"Spleen",correct:false}
],
explanation:"S. epidermidis has a distinct predilection for foreign bodies, such as artificial heart valves, indwelling intravascular catheters, central nervous system shunts, and hip prostheses."
},
// 261 6
{
question:"A patient with infection of an indwelling intravascular catheter is most likely infected with:",
answers:[
{text:"S. saprophyticus",correct:false},
{text:"S. aureus only",correct:false},
{text:"S. epidermidis",correct:true},
{text:"Streptococcus",correct:false},
{text:"Enterococcus",correct:false}
],
explanation:"S. epidermidis has a distinct predilection for foreign bodies, such as artificial heart valves, indwelling intravascular catheters, central nervous system shunts, and hip prostheses."
},
// 262 7
{
question:"S. epidermidis infections are commonly seen in patients with:",
answers:[
{text:"Food poisoning",correct:false},
{text:"CNS shunts",correct:true},
{text:"Viral hepatitis",correct:false},
{text:"Measles",correct:false},
{text:"Tuberculosis",correct:false}
],
explanation:"S. epidermidis has a distinct predilection for foreign bodies, such as artificial heart valves, indwelling intravascular catheters, central nervous system shunts, and hip prostheses."
},
// 263 8
{
question:"Infection of a hip prosthesis is most commonly associated with:",
answers:[
{text:"S. epidermidis",correct:true},
{text:"S. saprophyticus",correct:false},
{text:"MRSA only",correct:false},
{text:"Clostridium",correct:false},
{text:"Neisseria",correct:false}
],
explanation:"S. epidermidis has a distinct predilection for foreign bodies, such as artificial heart valves, indwelling intravascular catheters, central nervous system shunts, and hip prostheses."
},
// 264 9
{
question:"Staphylococcus saprophyticus normally occurs:",
answers:[
{text:"Only in hospital environment",correct:false},
{text:"On skin and periurethral flora",correct:true},
{text:"In blood only",correct:false},
{text:"In cerebrospinal fluid",correct:false},
{text:"In lungs",correct:false}
],
explanation:"S. saprophyticus occurs on the normal skin and in the periurethral and urethral flora. It is a common cause of urinary tract infections in sexually active young women. "
},
// 265 10
{
question:"S. saprophyticus is a common cause of:",
answers:[
{text:"Pneumonia",correct:false},
{text:"Meningitis",correct:false},
{text:"Urinary tract infection",correct:true},
{text:"Endocarditis only",correct:false},
{text:"Osteomyelitis",correct:false}
],
explanation:"S. saprophyticus occurs on the normal skin and in the periurethral and urethral flora. It is a common cause of urinary tract infections in sexually active young women. "
},
// 266 11
{
question:"Urinary tract infections due to S. saprophyticus are most common in:",
answers:[
{text:"Neonates",correct:false},
{text:"Elderly women",correct:false},
{text:"Sexually active young women",correct:true},
{text:"Children",correct:false},
{text:"Immunocompromised males",correct:false}
],
explanation:"S. saprophyticus occurs on the normal skin and in the periurethral and urethral flora. It is a common cause of urinary tract infections in sexually active young women. "
},
// 267 12
{
question:"In elderly men, S. saprophyticus may cause:",
answers:[
{text:"Cystitis only",correct:false},
{text:"Urethritis only",correct:false},
{text:"Prostatitis",correct:true},
{text:"Meningitis",correct:false},
{text:"Skin abscess",correct:false}
],
explanation:"It may also cause prostatitis in elderly men, and rarely bacteremia, sepsis and endocarditis."
},
// 268 13
{
question:"S. saprophyticus rarely causes:",
answers:[
{text:"UTI",correct:false},
{text:"Prostatitis",correct:false},
{text:"Bacteremia",correct:true},
{text:"Skin colonization",correct:false},
{text:"Normal flora colonization",correct:false}
],
explanation:"S. saprophyticus occurs on the normal skin and in the periurethral and urethral flora. It may also cause prostatitis in elderly men, and rarely bacteremia, sepsis and endocarditis."
},
// 269 14
{
question:"Endocarditis caused by S. saprophyticus is:",
answers:[
{text:"Very common",correct:false},
{text:"Moderately common",correct:false},
{text:"Rare",correct:true},
{text:"Always fatal",correct:false},
{text:"Limited to children",correct:false}
],
explanation:"S. saprophyticus occurs on the normal skin and in the periurethral and urethral flora. It may also cause prostatitis in elderly men, and rarely bacteremia, sepsis and endocarditis."
},
// 270 15
{
question:"Identification of a staphylococcus as methicillin-resistant implies resistance to:",
answers:[
{text:"Penicillin only",correct:false},
{text:"Nafcillin and oxacillin",correct:true},
{text:"Vancomycin",correct:false},
{text:"Erythromycin only",correct:false},
{text:"Aminoglycosides",correct:false}
],
explanation:"When any Staphylococcus isolated is identified as being resistant to methicillin, this implies that it is also resistant to nafcillin and oxacillin and to all b-lactam antibiotics, including the cephalosporins."
},
// 271 16
{
question:"Methicillin resistance indicates resistance to:",
answers:[
{text:"Only methicillin",correct:false},
{text:"Only nafcillin",correct:false},
{text:"All β-lactam antibiotics",correct:true},
{text:"Only cephalosporins",correct:false},
{text:"Glycopeptides",correct:false}
],
explanation:"When any Staphylococcus isolated is identified as being resistant to methicillin, this implies that it is also resistant to nafcillin and oxacillin and to all b-lactam antibiotics, including the cephalosporins."
},
// 272 17
{
question:". MRSA is resistant to:",
answers:[
{text:"Cephalosporins",correct:true},
{text:"Only methicillin",correct:false},
{text:"Only nafcillin",correct:false},
{text:"Only oxacillin",correct:false},
{text:"Only penicillin G",correct:false}
],
explanation:"When any Staphylococcus isolated is identified as being resistant to methicillin, this implies that it is also resistant to nafcillin and oxacillin and to all b-lactam antibiotics, including the cephalosporins."
},
// 273 18
{
question:"MRSA infections are increasingly common in:",
answers:[
{text:"Rural farms only",correct:false},
{text:"Pediatric wards only",correct:false},
{text:"Community settings",correct:true},
{text:"Veterinary clinics only",correct:false},
{text:"Marine environments",correct:false}
],
explanation:"MRSA is also becoming more common in the community, especially in long-stay institutions."
},
// 274 19
{
question:"MRSA is especially prevalent in:",
answers:[
{text:"Short outpatient visits",correct:false},
{text:"Long-stay institutions",correct:true},
{text:"Dental clinics only",correct:false},
{text:"Schools",correct:false},
{text:"Sports fields only",correct:false}
],
explanation:"MRSA is also becoming more common in the community, especially in long-stay institutions."
},
// 275 20
{
question:"Control of MRSA requires:",
answers:[
{text:"Routine vaccination",correct:false},
{text:"High-dose antibiotics",correct:false},
{text:"Strict infection-control practices",correct:true},
{text:"Isolation in negative pressure rooms only",correct:false},
{text:"Ultraviolet irradiation only",correct:false}
],
explanation:"Control of MRSA requires strict adherence to infection-control practices such as barrier."
},
// 276 21
{
question:"Barrier methods are important in:",
answers:[
{text:"Nutritional therapy",correct:false},
{text:"Infection control of MRSA",correct:true},
{text:"Vaccine development",correct:false},
{text:"Genetic studies",correct:false},
{text:"Water purification",correct:false}
],
explanation:"Control of MRSA requires strict adherence to infection-control practices such as barrier."
},
// 277 22
{
question:"A patient with artificial heart valve develops infection most likely due to:",
answers:[
{text:"S. saprophyticus",correct:false},
{text:"S. epidermidis",correct:true},
{text:"MRSA exclusively",correct:false},
{text:"Streptococcus pneumoniae",correct:false},
{text:"Clostridium tetani",correct:false}
],
explanation:"S. epidermidis has a distinct predilection for foreign bodies, such as artificial heart valves, indwelling intravascular catheters, central nervous system shunts, and hip prostheses."
},
// 278 23
{
question:"CNS shunt infections are classically associated with:",
answers:[
{text:"S. epidermidis",correct:true},
{text:"S. saprophyticus",correct:false},
{text:"MRSA only",correct:false},
{text:"Pseudomonas only",correct:false},
{text:"Candida only",correct:false}
],
explanation:"S. epidermidis has a distinct predilection for foreign bodies, such as artificial heart valves, indwelling intravascular catheters, central nervous system shunts, and hip prostheses."
},
// 279 24
{
question:"The normal periurethral flora includes:",
answers:[
{text:"S. epidermidis only",correct:false},
{text:"S. saprophyticus",correct:true},
{text:"MRSA exclusively",correct:false},
{text:"Streptococcus pyogenes",correct:false},
{text:"Enterococcus faecalis",correct:false}
],
explanation:"S. saprophyticus occurs on the normal skin and in the periurethral and urethral flora. It is a common cause of urinary tract infections in sexually active young women."
},
// 280 25
{
question:"If a staphylococcal isolate is methicillin-resistant, it should be considered resistant to:",
answers:[
{text:"Penicillin only",correct:false},
{text:"Nafcillin, oxacillin, and cephalosporins",correct:true},
{text:"Vancomycin",correct:false},
{text:"Teicoplanin",correct:false},
{text:"Macrolides",correct:false}
],
explanation:"When any Staphylococcus isolated is identified as being resistant to methicillin, this implies that it is also resistant to nafcillin and oxacillin and to all b-lactam antibiotics, including the cephalosporins."
},
// 281 26
{
question:"A sexually active young woman presenting with UTI is most likely infected with:",
answers:[
{text:"S. epidermidis",correct:false},
{text:"MRSA",correct:false},
{text:"S. saprophyticus",correct:true},
{text:"Streptococcus",correct:false},
{text:"Clostridium",correct:false}
],
explanation:"S. saprophyticus occurs on the normal skin and in the periurethral and urethral flora. It is a common cause of urinary tract infections in sexually active young women."
},
// 282 27
{
question:"Breach of host defense is most important in pathogenesis of:",
answers:[
{text:"S. saprophyticus UTI",correct:false},
{text:"S. epidermidis infection",correct:true},
{text:"MRSA colonization",correct:false},
{text:"Viral pneumonia",correct:false},
{text:"Food poisoning",correct:false}
],
explanation:"Staphylococcus epidermidis is invariably present on normal human skin. It is nonpathogenic ordinarily but can cause disease when the host defenses are breached."
},
// 283 28
{
question:"The term MRSA refers specifically to:",
answers:[
{text:"Methicillin-resistant S. epidermidis",correct:false},
{text:"Methicillin-resistant S. aureus",correct:true},
{text:"Methicillin-resistant S. saprophyticus",correct:false},
{text:"Multi-resistant streptococcus",correct:false},
{text:"Macrolide-resistant staphylococcus",correct:false}
],
explanation:"Methicillin-resistant Staphylococcus aureus (MrSA)"
},
//284 29
{
question:"In long-stay institutions, increasing MRSA prevalence indicates:",
answers:[
{text:"Decreased infection risk",correct:false},
{text:"Improved hygiene",correct:false},
{text:"Need for strict infection control",correct:true},
{text:"Decreased antibiotic resistance",correct:false},
{text:"Reduced barrier use",correct:false}
],
explanation:"Control of MRSA requires strict adherence to infection-control practices such as barrier."
},
// 285 30
{
question:"Foreign-body–associated infections are most characteristic of:",
answers:[
{text:"S. saprophyticus",correct:false},
{text:"MRSA only",correct:false},
{text:"S. epidermidis",correct:true},
{text:"Streptococcus",correct:false},
{text:"Enterococcus",correct:false}
],
explanation:"S. epidermidis has a distinct predilection for foreign bodies, such as artificial heart valves, indwelling intravascular catheters, central nervous system shunts, and hip prostheses."
},
// 286 
// STREPTOCOCCUS
// =============
{
question:"Streptococci were first described by:",
answers:[
{text:"Pasteur",correct:false},
{text:"Koch",correct:false},
{text:"Billroth",correct:true},
{text:"Lister",correct:false},
{text:"Fleming",correct:false}
],
explanation:"Streptococci were first described by Billroth (1874) in exudates from erysipelas and wound infections, who called them streptococci (streptos, meaning twisted or coiled; coccus, a grain or berry)."
},
// 287 
{
question:"Streptococci were first described in:",
answers:[
{text:"Tuberculosis lesions",correct:false},
{text:"Dental plaques",correct:false},
{text:"Erysipelas and wound exudates",correct:true},
{text:"Urinary tract infections",correct:false},
{text:"Intestinal infections",correct:false}
],
explanation:"Streptococci were first described by Billroth (1874) in exudates from erysipelas and wound infections, who called them streptococci (streptos, meaning twisted or coiled; coccus, a grain or berry)."
},
// 288 
{
question:"The term “streptos” means:",
answers:[
{text:"Round",correct:false},
{text:"Berry",correct:false},
{text:"Twisted or coiled",correct:true},
{text:"Clustered",correct:false},
{text:"Capsule",correct:false}
],
explanation:"Streptococci were first described by Billroth (1874) in exudates from erysipelas and wound infections, who called them streptococci (streptos, meaning twisted or coiled; coccus, a grain or berry)."
},
// 289 
{
question:"Streptococci are first classified based on:",
answers:[
{text:"Gram stain",correct:false},
{text:"Capsule type",correct:false},
{text:"Oxygen requirement",correct:true},
{text:"Toxin production",correct:false},
{text:"Temperature range",correct:false}
],
explanation:"Streptococci are first classified based on oxygen requirement. Streptococci are first divided into obligate anaerobe, aerobe and facultative anaerobes. Obligate anaerobes are designated as peptostreptococci."
},
// 290 
{
question:"Obligate anaerobic streptococci are designated as:",
answers:[
{text:"Viridans",correct:false},
{text:"Enterococci",correct:false},
{text:"Peptostreptococci",correct:true},
{text:"Group A",correct:false},
{text:"Group D",correct:false}
],
explanation:"Streptococci are first divided into obligate anaerobe, aerobe and facultative anaerobes. Obligate anaerobes are designated as pepto streptococci."
},
// 291 
{
question:"Alpha hemolysis produces:",
answers:[
{text:"Clear hemolysis",correct:false},
{text:"No hemolysis",correct:false},
{text:"Greenish discoloration",correct:true},
{text:"Black colonies",correct:false},
{text:"Yellow pigment",correct:false}
],
explanation:"a.	Alpha Hemolytic Streptococci. They produce a zone of partial hemolysis with a greenish discoloration around the colonies on blood agar. The streptococci producing a-hemolysis are also known as viridans streptococci (from ‘virdis’ meaning green)."
},
// 292 
{
question:"Alpha-hemolytic streptococci are also called:",
answers:[
{text:"Pyogenic streptococci",correct:false},
{text:"Enterococci",correct:false},
{text:"Viridans streptococci",correct:true},
{text:"Group B",correct:false},
{text:"Peptostreptococci",correct:false}
],
explanation:"a.	Alpha Hemolytic Streptococci. They produce a zone of partial hemolysis with a greenish discoloration around the colonies on blood agar. The streptococci producing a-hemolysis are also known as viridans streptococci (from ‘virdis’ meaning green)."
},
// 293 
{
question:"Beta hemolysis produces:",
answers:[
{text:"Greenish zone",correct:false},
{text:"Complete lysis of RBCs",correct:true},
{text:"No RBC lysis",correct:false},
{text:"Pigment formation",correct:false},
{text:"Capsule production",correct:false}
],
explanation:"b.	Beta Hemolytic Streptococci. They produce a sharply defined, clear, colorless zone of hemolysis (2–4 mm wide) around the colony, caused by complete lysis of red blood cells in the agar medium induced by bacterial hemolysins. b-hemolysis constitutes the principal marker for potentially pathogenic streptococci in cultures of throat swabs or other clinical samples."
},
// 294 
{
question:"The clear hemolytic zone of beta hemolysis measures approximately:",
answers:[
{text:"1 mm",correct:false},
{text:"2–4 mm",correct:true},
{text:"5–8 mm",correct:false},
{text:"10 mm",correct:false},
{text:"15 mm",correct:false}
],
explanation:"b.	Beta Hemolytic Streptococci. They produce a sharply defined, clear, colorless zone of hemolysis (2–4 mm wide) around the colony, caused by complete lysis of red blood cells in the agar medium induced by bacterial hemolysins. b-hemolysis constitutes the principal marker for potentially pathogenic streptococci in cultures of throat swabs or other clinical samples."
},
// 295 
{
question:"Beta hemolysis is the principal marker for:",
answers:[
{text:"Commensal streptococci",correct:false},
{text:"Potentially pathogenic streptococci",correct:true},
{text:"Enterococci",correct:false},
{text:"Peptostreptococci",correct:false},
{text:"Dental flora",correct:false}
],
explanation:"b.	Beta Hemolytic Streptococci. They produce a sharply defined, clear, colorless zone of hemolysis (2–4 mm wide) around the colony, caused by complete lysis of red blood cells in the agar medium induced by bacterial hemolysins. b-hemolysis constitutes the principal marker for potentially pathogenic streptococci in cultures of throat swabs or other clinical samples."
},
// 296 
{
question:"Gamma hemolysis means:",
answers:[
{text:"Partial hemolysis",correct:false},
{text:"Complete hemolysis",correct:false},
{text:"No hemolysis",correct:true},
{text:"Delayed hemolysis",correct:false},
{text:"Double zone hemolysis",correct:false}
],
explanation:"c.	Gamma (g) or Nonhemolytic Streptococci. They produce no hemolysis on blood agar. Enterococcus faecalis is an important organism of this group."
},
// 297 
{
question:"An important gamma-hemolytic organism is:",
answers:[
{text:"S. mutans",correct:false},
{text:"S. sanguis",correct:false},
{text:"Enterococcus faecalis",correct:true},
{text:"S. pyogenes",correct:false},
{text:"S. agalactiae",correct:false}
],
explanation:"c.	Gamma (g) or Nonhemolytic Streptococci. They produce no hemolysis on blood agar. Enterococcus faecalis is an important organism of this group."
},
// 298 
{
question:"S. pyogenes is:",
answers:[
{text:"Gram-negative cocci",correct:false},
{text:"Gram-positive cocci",correct:true},
{text:"Gram-positive bacilli",correct:false},
{text:"Spirochete",correct:false},
{text:"Acid-fast bacillus",correct:false}
],
explanation:"S. pyogenes are gram-positive, spherical to ovoid organisms 0.5 to 1.0 mm in diameter. The organism grows in short or moderately long chains, the chain length being dependent on the strain and culture medium."
},
// 299 
{
question:"S. pyogenes is arranged in:",
answers:[
{text:"Clusters",correct:false},
{text:"Tetrads",correct:false},
{text:"Pairs only",correct:false},
{text:"Chain",correct:true},
{text:"Palisades",correct:false}
],
explanation:"S. pyogenes are gram-positive, spherical to ovoid organisms 0.5 to 1.0 mm in diameter. The organism grows in short or moderately long chains, the chain length being dependent on the strain and culture medium."
},
// 300 
{
question:"S. pyogenes grows best at:",
answers:[
{text:"25°C",correct:false},
{text:"30°C",correct:false},
{text:"37°C",correct:true},
{text:"42°C",correct:false},
{text:"50°C",correct:false}
],
explanation:"Streptococci pyogenes are non-motile and non-sporing. They are aerobe and facultative anaerobes, growing best at a temperature of 37°C (range 22–42°C)."
},
// 301 
 {
    question: "S. pyogenes can survive in dust:",
    answers: [
      { text: "24 hours", "correct": false },
      { text: "1 week", "correct": false },
      { text: "Several weeks", "correct": true },
      { text: "6 months", "correct": false },
      { text: "1 year", "correct": false }
    ],
	explanation: "S. pyogenes is a delicate organism, can be killed by heating at 54°C for 30 minutes. It can, however, survive in dust for several weeks, if protected from sunlight."
  },
// 302 
  {
    "question": "S. pyogenes is killed by heating at 54°C for:",
    "answers": [
      { "text": "10 min", "correct": false },
      { "text": "15 min", "correct": false },
      { "text": "30 min", "correct": true },
      { "text": "60 min", "correct": false },
      { "text": "2 hours", "correct": false }
    ],
	explanation: "S. pyogenes is a delicate organism, can be killed by heating at 54°C for 30 minutes. It can, however, survive in dust for several weeks, if protected from sunlight. "
  },
// 303 
  {
    "question": "S. pyogenes toxins include:",
    "answers": [
      { "text": "Alpha toxin", "correct": false },
      { "text": "Enterotoxin", "correct": false },
      { "text": "Streptolysin O and S", "correct": true },
      { "text": "Coagulase", "correct": false },
      { "text": "Lipase", "correct": false }
    ],
    "explanation": "S. pyogenes toxins: Streptolysin O and Streptolysin S. "
  },
// 304 
  {
    "question": "Acute S. pyogenes disease commonly involves:",
    "answers": [
      { "text": "GI tract", "correct": false },
      { "text": "Respiratory tract, bloodstream, skin", "correct": true },
      { "text": "CNS only", "correct": false },
      { "text": "Bone only", "correct": false },
      { "text": "Kidney only", "correct": false }
    ],
    "explanation": ""
  },
// 305 
  {
    "question": "The most common streptococcal disease is:",
    "answers": [
      { "text": "Endocarditis", "correct": false },
      { "text": "Septicemia", "correct": false },
      { "text": "Sore throat", "correct": true },
      { "text": "Osteomyelitis", "correct": false },
      { "text": "Meningitis", "correct": false }
    ],
    "explanation": "Sore throat is the most common of streptococcal disease. It may be localized as tonsillitis or may involve the pharynx more diffusely (pharyngitis)."
  },
// 306 
  {
    "question": "Scarlet fever results from:",
    "answers": [
      { "text": "Capsule production", "correct": false },
      { "text": "Lysogenized strain producing pyrogenic exotoxin", "correct": true },
      { "text": "Coagulase", "correct": false },
      { "text": "Streptolysin O only", "correct": false },
      { "text": "Beta hemolysis alone", "correct": false }
    ],
    "explanation": "Scarlet fever: It is a complication of streptococcal pharyngitis that occurs when the infecting strain is lysogenized by a temperate bacteriophage that stimulates production of a pyrogenic exotoxin. Scarlet fever or scarlatina is a diffuse erythematous rash of the skin and mucous membranes."
  },
// 307 
  {
    "question": "Impetigo is common in:",
    "answers": [
      { "text": "Elderly", "correct": false },
      { "text": "Young children with poor hygiene", "correct": true },
      { "text": "Neonates only", "correct": false },
      { "text": "Pregnant women", "correct": false },
      { "text": "Athletes", "correct": false }
    ],
    "explanation": "Impetigo is seen primarily in young children with poor personal hygiene."
  },
// 308 
  {
    "question": "“Flesh-eating bacteria” refers to:",
    "answers": [
      { "text": "Scarlet fever", "correct": false },
      { "text": "Necrotizing fasciitis", "correct": true },
      { "text": "Impetigo", "correct": false },
      { "text": "Tonsillitis", "correct": false },
      { "text": "Rheumatic fever", "correct": false }
    ],
    "explanation": "S. pyogenes infection that causes necrotizing fascitis (Streptococcal gangrene referred as “flesheating bacteria”) and streptococcal toxic shock syndrome."
  },
// 309 
  {
    "question": "Puerperal sepsis is classified as:",
    "answers": [
      { "text": "Non-suppurative", "correct": false },
      { "text": "Suppurative", "correct": true },
      { "text": "Autoimmune", "correct": false },
      { "text": "Viral", "correct": false },
      { "text": "Fungal", "correct": false }
    ],
    "explanation": "Puerperal sepsis: Streptococcal puerperal sepsis (suppurative infection) used to take a heavy toll of life before antibiotics became available. "
  },
// 310 
  {
    "question": "Acute rheumatic fever is:",
    "answers": [
      { "text": "Suppurative", "correct": false },
      { "text": "Nonsuppurative", "correct": true },
      { "text": "Localized infection", "correct": false },
      { "text": "Toxin-mediated only", "correct": false },
      { "text": "Viral reaction", "correct": false }
    ],
    "explanation": "1.	Acute Rheumatic Fever (ARF). Rheumatic fever is a nonsuppurative inflammatory reaction that is epidemiologically and serologically related to antecedent group A streptococcal infection. Typically, rheumatic fever follows persistent or repeated streptococcal throat infection with a strong antibody response."
  },
// 311 
  {
    "question": "ARF follows:",
    "answers": [
      { "text": "Skin infection only", "correct": false },
      { "text": "Persistent/repeated throat infection", "correct": true },
      { "text": "Pneumonia", "correct": false },
      { "text": "Abscess", "correct": false },
      { "text": "UTI", "correct": false }
    ],
    "explanation": "1.	Acute Rheumatic Fever (ARF). Rheumatic fever is a nonsuppurative inflammatory reaction that is epidemiologically and serologically related to antecedent group A streptococcal infection. Typically, rheumatic fever follows persistent or repeated streptococcal throat infection with a strong antibody response."
  },
// 312 
  {
    "question": "Acute poststreptococcal glomerulonephritis may follow:",
    "answers": [
      { "text": "Pharyngeal or cutaneous infection", "correct": true },
      { "text": "Pneumonia only", "correct": false },
      { "text": "Endocarditis only", "correct": false },
      { "text": "Brain abscess", "correct": false },
      { "text": "UTI", "correct": false }
    ],
    "explanation": "Acute Poststreptococcal Glomerulonephritis (AGN). AGN may be seen after either a pharyngeal or a cutaneous infection. AGN is most often seen in children. "
  },
// 313 
  {
    "question": "AGN is most often seen in:",
    "answers": [
      { "text": "Adults", "correct": false },
      { "text": "Neonates", "correct": false },
      { "text": "Children", "correct": true },
      { "text": "Elderly", "correct": false },
      { "text": "Pregnant women", "correct": false }
    ],
    "explanation": "Acute Poststreptococcal Glomerulonephritis (AGN). AGN may be seen after either a pharyngeal or a cutaneous infection. AGN is most often seen in children."
  },
// 314 
  {
    "question": "S. pyogenes treatment of choice:",
    "answers": [
      { "text": "Vancomycin", "correct": false },
      { "text": "Penicillin", "correct": true },
      { "text": "Tetracycline", "correct": false },
      { "text": "Bacitracin", "correct": false },
      { "text": "Chloramphenicol", "correct": false }
    ],
    "explanation": "S. pyogenes is very sensitive to penicillin. Erythromycin or an oral cephalosporin can be used in patients with a history of penicillin allergy."
  },
  // 315 
  {
    "question": "Penicillin-allergic patients may receive:",
    "answers": [
      { "text": "Coagulase", "correct": false },
      { "text": "Erythromycin", "correct": true },
      { "text": "Insulin", "correct": false },
      { "text": "Streptolysin", "correct": false },
      { "text": "Bile", "correct": false }
    ],
	explanation: "S. pyogenes is very sensitive to penicillin. Erythromycin or an oral cephalosporin can be used in patients with a history of penicillin allergy."
  },
// 316 
  {
    "question": "Group B streptococci is:",
    "answers": [
      { "text": "S. mutans", "correct": false },
      { "text": "S. agalactiae", "correct": true },
      { "text": "S. pyogenes", "correct": false },
      { "text": "S. sanguis", "correct": false },
      { "text": "S. bovis", "correct": false }
    ],
explanation: "group B streptococci: streptococcus agalactiae"
  },
// 317 
  {
    "question": "S. agalactiae causes:",
    "answers": [
      { "text": "Dental caries", "correct": false },
      { "text": "Neonatal infections", "correct": true },
      { "text": "Rheumatic fever", "correct": false },
      { "text": "Impetigo", "correct": false },
      { "text": "Scarlet fever", "correct": false }
    ],
explanation: "Streptococcus agalactiae has become the leading cause of neonatal infections in industrialized countries and is also important cause of morbidity among peripartum women and non-pregnant adults with chronic medical conditions. "
  },
// 318 
  {
    "question": "Neonatal disease forms:",
    "answers": [
      { "text": "Acute/chronic", "correct": false },
      { "text": "Early-onset and late-onset", "correct": true },
      { "text": "Mild/severe", "correct": false },
      { "text": "Respiratory/cardiac", "correct": false },
      { "text": "Suppurative/nonsuppurative", "correct": false }
    ],
explanation: "S. agalactiae causes infection in the neonate and two forms of neonatal disease: early-onset and late-onset; these diseases are characterized by meningitis, pneumonia, and bacteremia. Most infections in newborns acquired from mother during pregnancy or at time of birth."
  },
// 319 
  {
    "question": "Group C human strains usually belong to:",
    "answers": [
      { "text": "S. mutans", "correct": false },
      { "text": "S. equisimilis", "correct": true },
      { "text": "S. agalactiae", "correct": false },
      { "text": "S. bovis", "correct": false },
      { "text": "S. anginosus", "correct": false }
    ],
explanation: "Group C streptococci. Streptococci of this group are predominantly animal pathogens. Group C strains isolated from human sources usually belong to S. equisimilis. It can cause upper respiratory infections, as well as deep infections such as endocarditis, osteomyelitis, brain abscess, pneumonia and puerperal sepsis."
  },
// 320 
  {
    "question": "Group F are called:",
    "answers": [
      { "text": "Minute streptococci", "correct": true },
      { "text": "Giant streptococci", "correct": false },
      { "text": "Beta streptococci", "correct": false },
      { "text": "Viridans", "correct": false },
      { "text": "Enterococci", "correct": false }
    ],
explanation: "Group F. They have been called the ‘minute steptococci’. "
  },
// 321  
{
    "question": "Group F grow poorly unless incubated:",
    "answers": [
      { "text": "With bile", "correct": false },
      { "text": "With NaCl", "correct": false },
      { "text": "Under CO₂", "correct": true },
      { "text": "At 45°C", "correct": false },
      { "text": "With methylene blue", "correct": false }
    ],
explanation: "Group F. They have been called the ‘minute steptococci’. These grow poorly on blood agar unless incubated under CO2. They are sometimes found in suppurative lesions. Streptococcus MG belongs to group F streptococci."
  },
// 322 
  {
    "question": "Group G are:",
    "answers": [
      { "text": "Animal pathogens only", "correct": false },
      { "text": "Commensals of throat", "correct": true },
      { "text": "Skin flora only", "correct": false },
      { "text": "Intestinal flora only", "correct": false },
      { "text": "Vaginal flora only", "correct": false }
    ],
explanation: "Group G. These are commensals in the throats of human beings, monkeys or dogs. These may cause sore throat, pneumonia, septicemia, endocarditis, and bone, joint, skin and wound infections."
  },
// 323 
  {
    "question": "Group D was divided into:",
    "answers": [
      { "text": "Alpha and beta", "correct": false },
      { "text": "Enterococci and nonenterococci", "correct": true },
      { "text": "Viridans and pyogenic", "correct": false },
      { "text": "Aerobes and anaerobes", "correct": false },
      { "text": "Capsule types", "correct": false }
    ],
explanation: "The group D streptococci were divided into the two groups: 1. Enterococcus group (enterococci or fecal streptococci), which have been reclassified as a separate genus called Enterococcus; 2. Nonenterococcal group, for example, S. bovis, S. equinus."
  },
// 324   
{
    "question": "Enterococci are natural inhabitants of:",
    "answers": [
      { "text": "Lungs", "correct": false },
      { "text": "Skin", "correct": false },
      { "text": "Intestinal tract", "correct": true },
      { "text": "Brain", "correct": false },
      { "text": "Blood", "correct": false }
    ],
explanation: "Enterococcus. This group consists of gram-positive cocci that are natural inhabitants of the intestinal tracts of humans and animals."
  },
// 325 
  {
    "question": "Enterococci grow in:",
    "answers": [
      { "text": "1% NaCl", "correct": false },
      { "text": "6.5% NaCl", "correct": true },
      { "text": "2% bile", "correct": false },
      { "text": "pH 5", "correct": false },
      { "text": "50°C only", "correct": false }
    ],
explanation: "The enterococci grow in the presence of 6.5% NaCl, 40% bile, at pH 9.6, at 45°C and in 0.1% methelyne blue. It survives heating at 60°C for 30 minute, a feature distinguishing it from streptococci, and also grows within a wider range of temperatures (10–45°C)."
  },
// 326 
  {
    "question": "Enterococci survive heating at:",
    "answers": [
      { "text": "50°C 10 min", "correct": false },
      { "text": "54°C 30 min", "correct": false },
      { "text": "60°C 30 min", "correct": true },
      { "text": "70°C 15 min", "correct": false },
      { "text": "80°C 5 min", "correct": false }
    ],
explanation: "The enterococci grow in the presence of 6.5% NaCl, 40% bile, at pH 9.6, at 45°C and in 0.1% methelyne blue. It survives heating at 60°C for 30 minute, a feature distinguishing it from streptococci, and also grows within a wider range of temperatures (10–45°C)."
  },
// 327 
  {
    "question": "Viridans streptococci are most common cause of:",
    "answers": [
      { "text": "ARF", "correct": false },
      { "text": "AGN", "correct": false },
      { "text": "Subacute bacterial endocarditis", "correct": true },
      { "text": "Neonatal sepsis", "correct": false },
      { "text": "Scarlet fever", "correct": false }
    ],
explanation: "Viridans streptococci: S. mutans, S. sanguis, S. parasanguis S. milleri. Streptococcus anginosus is responsible for causing pyogenic infections, as was found with the groupable strains. They have also been implicated in meningitis, abscesses, osteomyelitis, and empyema."
  },
// 328 
  {
    "question": "S. mutans causes:",
    "answers": [
      { "text": "Endocarditis only", "correct": false },
      { "text": "Dental caries", "correct": true },
      { "text": "Impetigo", "correct": false },
      { "text": "Pneumonia", "correct": false },
      { "text": "ARF", "correct": false }
    ],
explanation: "S. mutans is the principal cause of dental caries (tooth decay). S. mutans adheres to dental surfaces via extracellular carbohydrates (dextran) and erodes the teeth by converting sucrose to acetic acid and lactate. It breaks down dietary sucrose, producing acid and a tough adhesive dextran. "
  },
// 329 
  {
    "question": "S. mutans adheres via:",
    "answers": [
      { "text": "Capsule", "correct": false },
      { "text": "Dextran", "correct": true },
      { "text": "Streptolysin", "correct": false },
      { "text": "Coagulase", "correct": false },
      { "text": "Lipase", "correct": false }
    ],
explanation: "S. mutans is the principal cause of dental caries (tooth decay). S. mutans adheres to dental surfaces via extracellular carbohydrates (dextran) and erodes the teeth by converting sucrose to acetic acid and lactate. It breaks down dietary sucrose, producing acid and a tough adhesive dextran. "
  },
// 330 
  {
    "question": "Dental erosion occurs due to:",
    "answers": [
      { "text": "Lactic acid production", "correct": true },
      { "text": "Capsule", "correct": false },
      { "text": "Pigment", "correct": false },
      { "text": "Hemolysin", "correct": false },
      { "text": "Protein A", "correct": false }
    ],
explanation: "S. mutans is the principal cause of dental caries (tooth decay). S. mutans adheres to dental surfaces via extracellular carbohydrates (dextran) and erodes the teeth by converting sucrose to acetic acid and lactate. It breaks down dietary sucrose, producing acid and a tough adhesive dextran. "
  },
// 331 
  {
    "question": "Viridans endocarditis commonly due to:",
    "answers": [
      { "text": "S. agalactiae", "correct": false },
      { "text": "S. bovis", "correct": false },
      { "text": "S. sanguis and S. mutans", "correct": true },
      { "text": "S. pyogenes", "correct": false },
      { "text": "S. equinus", "correct": false }
    ],
explanation: "Viridans streptococci are the most common cause of subacute bacterial endocarditis. About two-thirds of the viridans-associated cases are due to S. sanguis and S. mutans."
  },
// =================
//       IMMUNITY
// ===================
// 332 1
  {
    "question": "Immunity refers to:",
    "answers": [
      { "text": "Body temperature regulation", "correct": false },
      { "text": "Resistance of host against injury by microorganisms and their products", "correct": true },
      { "text": "Production of antibodies only", "correct": false },
      { "text": "Reaction to self antigens", "correct": false },
      { "text": "Inflammatory response only", "correct": false }
    ],
    "explanation": ""
  },
// 333 2
  {
    "question": "The immune system is primarily concerned with the body’s reaction against:",
    "answers": [
      { "text": "Bacteria only", "correct": false },
      { "text": "Viruses only", "correct": false },
      { "text": "Parasites only", "correct": false },
      { "text": "Any foreign antigen", "correct": true },
      { "text": "Environmental toxins only", "correct": false }
    ],
    "explanation": ""
  },
// 334 3
  {
    "question": "Immunity is broadly classified into:",
    "answers": [
      { "text": "Active and Passive", "correct": false },
      { "text": "Humoral and Cellular", "correct": false },
      { "text": "Innate and Acquired", "correct": true },
      { "text": "Natural and Artificial", "correct": false },
      { "text": "Specific and Nonspecific", "correct": false }
    ],
    "explanation": ""
  },
// 335 4
  {
    "question": "Innate immunity is also known as:",
    "answers": [
      { "text": "Adaptive immunity", "correct": false },
      { "text": "Acquired immunity", "correct": false },
      { "text": "Artificial immunity", "correct": false },
      { "text": "Natural immunity", "correct": true },
      { "text": "Passive immunity", "correct": false }
    ],
    "explanation": ""
  },
// 336 5
  {
    "question": "Innate immunity is primarily determined by:",
    "answers": [
      { "text": "Vaccination history", "correct": false },
      { "text": "Prior infections", "correct": false },
      { "text": "Genetic or constitutional makeup", "correct": true },
      { "text": "Nutritional status", "correct": false },
      { "text": "Age alone", "correct": false }
    ],
    "explanation": ""
  },
// 337 6
  {
    "question": "A key feature of innate immunity is that it:",
    "answers": [
      { "text": "Improves after repeated exposure", "correct": false },
      { "text": "Produces immunological memory", "correct": false },
      { "text": "Is antigen-specific", "correct": false },
      { "text": "Is not enhanced by repeated exposure to a pathogen", "correct": true },
      { "text": "Requires antibody formation", "correct": false }
    ],
    "explanation": ""
  },
// 338 7
  {
    "question": "Acquired immunity is defined as resistance that is:",
    "answers": [
      { "text": "Genetically inherited", "correct": false },
      { "text": "Present at birth only", "correct": false },
      { "text": "Acquired during an individual’s lifetime", "correct": true },
      { "text": "Limited to bacterial infections", "correct": false },
      { "text": "Independent of antigen exposure", "correct": false }
    ],
    "explanation": ""
  },
// 339 8
  {
    "question": "The two main types of acquired immunity are:",
    "answers": [
      { "text": "Natural and Artificial", "correct": false },
      { "text": "Humoral and Cellular", "correct": false },
      { "text": "Active and Passive", "correct": true },
      { "text": "Specific and Nonspecific", "correct": false },
      { "text": "Local and Systemic", "correct": false }
    ],
    "explanation": ""
  },
// 340 9
  {
    "question": "Active immunity is induced by:",
    "answers": [
      { "text": "Genetic inheritance", "correct": false },
      { "text": "Transfer of ready-made antibodies", "correct": false },
      { "text": "Contact with foreign antigens", "correct": true },
      { "text": "Placental transfer", "correct": false },
      { "text": "Breast milk antibodies", "correct": false }
    ],
    "explanation": ""
  },
// 341 10
  {
    "question": "Active immunity is also known as:",
    "answers": [
      { "text": "Innate immunity", "correct": false },
      { "text": "Natural immunity", "correct": false },
      { "text": "Passive immunity", "correct": false },
      { "text": "Adaptive immunity", "correct": true },
      { "text": "Herd immunity", "correct": false }
    ],
    "explanation": ""
  },
// 342 11
  {
    "question": "Active immunity involves:",
    "answers": [
      { "text": "No role of host immune system", "correct": false },
      { "text": "Suppression of immune cells", "correct": false },
      { "text": "Active functioning of host immune apparatus", "correct": true },
      { "text": "Transfer of maternal antibodies", "correct": false },
      { "text": "Only cellular immunity", "correct": false }
    ],
    "explanation": ""
  },
// 343 12
  {
    "question": "Active immunity leads to synthesis of:",
    "answers": [
      { "text": "Hormones", "correct": false },
      { "text": "Antibodies and immunologically active cells", "correct": true },
      { "text": "Enzymes only", "correct": false },
      { "text": "Complement proteins only", "correct": false },
      { "text": "Cytokines only", "correct": false }
    ],
    "explanation": ""
  },
// 344 13
  {
    "question": "Natural active immunity results from:",
    "answers": [
      { "text": "Vaccination", "correct": false },
      { "text": "Administration of immune serum", "correct": false },
      { "text": "Clinical or inapparent infection", "correct": true },
      { "text": "Placental antibody transfer", "correct": false },
      { "text": "Injection of immunoglobulins", "correct": false }
    ],
    "explanation": ""
  },
// 345 14
  {
    "question": "Natural active immunity is usually:",
    "answers": [
      { "text": "Short-lived", "correct": false },
      { "text": "Immediate but transient", "correct": false },
      { "text": "Long lasting", "correct": true },
      { "text": "Ineffective", "correct": false },
      { "text": "Non-specific", "correct": false }
    ],
    "explanation": ""
  },
// 346 15
  {
    "question": "Artificial active immunity is induced by:",
    "answers": [
      { "text": "Breastfeeding", "correct": false },
      { "text": "Maternal antibodies", "correct": false },
      { "text": "Vaccines", "correct": true },
      { "text": "Immune cells", "correct": false },
      { "text": "Gamma globulin", "correct": false }
    ],
    "explanation": ""
  },
// 347 16
  {
    "question": "Vaccines are preparations of:",
    "answers": [
      { "text": "Synthetic antibodies only", "correct": false },
      { "text": "Live or killed microorganisms or their products", "correct": true },
      { "text": "Hormonal extracts", "correct": false },
      { "text": "Enzyme complexes", "correct": false },
      { "text": "Plasma proteins", "correct": false }
    ],
    "explanation": ""
  },
// 348 17
  {
    "question": "Which of the following is NOT a vaccine type mentioned in the text?",
    "answers": [
      { "text": "Live attenuated microorganisms", "correct": false },
      { "text": "Killed microorganisms", "correct": false },
      { "text": "Microbial extract", "correct": false },
      { "text": "Antibiotic complexes", "correct": true },
      { "text": "Inactivated toxoids", "correct": false }
    ],
    "explanation": ""
  },
// 349 18
  {
    "question": "Passive immunity is characterized by:",
    "answers": [
      { "text": "Active host antibody production", "correct": false },
      { "text": "Immunological memory formation", "correct": false },
      { "text": "Transfer of immunity in readymade form", "correct": true },
      { "text": "Long-lasting protection", "correct": false },
      { "text": "Booster effect", "correct": false }
    ],
    "explanation": ""
  },
// 350 19
  {
    "question": "In passive immunity, the recipient’s immune system:",
    "answers": [
      { "text": "Is highly stimulated", "correct": false },
      { "text": "Produces memory cells", "correct": false },
      { "text": "Plays no active role", "correct": true },
      { "text": "Produces antibodies slowly", "correct": false },
      { "text": "Undergoes a negative phase", "correct": false }
    ],
    "explanation": ""
  },
// 351 20
  {
    "question": "A major advantage of passive immunity is:",
    "answers": [
      { "text": "Lifelong protection", "correct": false },
      { "text": "Strong memory response", "correct": false },
      { "text": "Immediate protection", "correct": true },
      { "text": "Booster effectiveness", "correct": false },
      { "text": "Antigen specificity", "correct": false }
    ],
    "explanation": ""
  },
// 352 21
  {
    "question": "Passive immunity has no:",
    "answers": [
      { "text": "Immediate effect", "correct": false },
      { "text": "Memory", "correct": true },
      { "text": "Antibody transfer", "correct": false },
      { "text": "Therapeutic role", "correct": false },
      { "text": "Prophylactic use", "correct": false }
    ],
    "explanation": ""
  },
// 353 22
  {
    "question": "Natural passive immunity is transferred through:",
    "answers": [
      { "text": "Vaccination", "correct": false },
      { "text": "Immune serum", "correct": false },
      { "text": "Placenta and breast milk", "correct": true },
      { "text": "Adoptive lymphocyte transfer", "correct": false },
      { "text": "Convalescent sera", "correct": false }
    ],
    "explanation": ""
  },
// 354 23
  {
    "question": "Artificial passive immunity is produced by administration of:",
    "answers": [
      { "text": "Vaccines", "correct": false },
      { "text": "Immunogens", "correct": false },
      { "text": "Antibodies", "correct": true },
      { "text": "Live microbes", "correct": false },
      { "text": "Toxoids", "correct": false }
    ],
    "explanation": ""
  },
// 355 24
  {
    "question": "Artificial passive immunity is typically:",
    "answers": [
      { "text": "Delayed but long-lasting", "correct": false },
      { "text": "Immediate and short-lived", "correct": true },
      { "text": "Permanent", "correct": false },
      { "text": "Memory-inducing", "correct": false },
      { "text": "Booster-dependent", "correct": false }
    ],
    "explanation": ""
  },
// 356 25
  {
    "question": "Pooled human gamma globulin is used for:",
    "answers": [
      { "text": "Active immunization", "correct": false },
      { "text": "Artificial passive immunization", "correct": true },
      { "text": "Natural passive immunity", "correct": false },
      { "text": "Herd immunity", "correct": false },
      { "text": "Local immunity", "correct": false }
    ],
    "explanation": ""
  },
// 357 26
  {
    "question": "Combined immunization involves:",
    "answers": [
      { "text": "Two vaccine doses", "correct": false },
      { "text": "Two passive immunizations", "correct": false },
      { "text": "Combination of active and passive methods", "correct": true },
      { "text": "Multiple live vaccines", "correct": false },
      { "text": "Multiple killed vaccines", "correct": false }
    ],
    "explanation": ""
  },
// 358 27
  {
    "question": "Adoptive immunity is produced by injection of:",
    "answers": [
      { "text": "Antibodies", "correct": false },
      { "text": "Vaccines", "correct": false },
      { "text": "Immunologically competent lymphocytes", "correct": true },
      { "text": "Toxoids", "correct": false },
      { "text": "Microbial extracts", "correct": false }
    ],
    "explanation": ""
  },
// 359 28
  {
    "question": "Local immunity is mainly mediated by:",
    "answers": [
      { "text": "IgG", "correct": false },
      { "text": "IgM", "correct": false },
      { "text": "IgE", "correct": false },
      { "text": "Secretory IgA", "correct": true },
      { "text": "Complement proteins", "correct": false }
    ],
    "explanation": ""
  },
// 360 29
  {
    "question": "Local immunity is produced on:",
    "answers": [
      { "text": "Skin surface only", "correct": false },
      { "text": "Bloodstream", "correct": false },
      { "text": "Mucosal surfaces and secretory glands", "correct": true },
      { "text": "Bone marrow", "correct": false },
      { "text": "Lymph nodes", "correct": false }
    ],
    "explanation": ""
  },
// 361 30
  {
    "question": "Herd immunity refers to:",
    "answers": [
      { "text": "Immunity of animals only", "correct": false },
      { "text": "Resistance of a single individual", "correct": false },
      { "text": "Vaccine-induced immunity", "correct": false },
      { "text": "Community resistance to a particular disease", "correct": true },
      { "text": "Genetic immunity", "correct": false }
    ],
    "explanation": ""
  },
// ======================
//      INFECTION
// ======================
// 362 1
  {
    "question": "Infection and immunity involve interaction between:",
    "answers": [
      { "text": "Host and environment", "correct": false },
      { "text": "Host and infecting microorganisms", "correct": true },
      { "text": "Microorganisms and vectors", "correct": false },
      { "text": "Parasites and reservoirs", "correct": false },
      { "text": "Pathogens and antibiotics", "correct": false }
    ],
    "explanation": "Infection and immunity involve interaction between the animal body (host) and the infecting microorganisms."
  },
// 363 2
  {
    "question": "Based on their relationship to the host, microorganisms are divided into:",
    "answers": [
      { "text": "Pathogens and commensals", "correct": false },
      { "text": "Saprophytes and parasites", "correct": true },
      { "text": "Vectors and reservoirs", "correct": false },
      { "text": "Primary and opportunistic", "correct": false },
      { "text": "Local and systemic", "correct": false }
    ],
    "explanation": "Based on their relationship to their host they can be divided into saprophytes and parasites. "
  },
// 364 3
  {
    "question": "Saprophytes are microbes that:",
    "answers": [
      { "text": "Multiply in host tissues", "correct": false },
      { "text": "Cause disease in healthy individuals", "correct": false },
      { "text": "Live on dead or decaying organic matter", "correct": true },
      { "text": "Always act as pathogens", "correct": false },
      { "text": "Require a living host", "correct": false }
    ],
    "explanation": "Saprophytes (from Greek sapros decayed; and phyton plant) are free-living microbes that live on dead or decaying organic matter. They are of little relevance in infectious disease. However, saprophytes may cause infection sometimes when host resistance is lowered."
  },
// 365 4
  {
    "question": "Saprophytes are of little relevance in infectious disease because they:",
    "answers": [
      { "text": "Cannot multiply", "correct": false },
      { "text": "Are non-microbial", "correct": false },
      { "text": "Do not survive long", "correct": false },
      { "text": "Rarely infect humans", "correct": true },
      { "text": "Are always destroyed by immunity", "correct": false }
    ],
    "explanation": "Saprophytes (from Greek sapros decayed; and phyton plant) are free-living microbes that live on dead or decaying organic matter. They are of little relevance in infectious disease. However, saprophytes may cause infection sometimes when host resistance is lowered."
  },
// 366 5
  {
    "question": "Saprophytes may cause infection when:",
    "answers": [
      { "text": "Host immunity is strong", "correct": false },
      { "text": "Antibiotics are given", "correct": false },
      { "text": "Host resistance is lowered", "correct": true },
      { "text": "Vectors are present", "correct": false },
      { "text": "Temperature rises", "correct": false }
    ],
    "explanation": "Saprophytes (from Greek sapros decayed; and phyton plant) are free-living microbes that live on dead or decaying organic matter. They are of little relevance in infectious disease. However, saprophytes may cause infection sometimes when host resistance is lowered."
  },
// 367 6
  {
    "question": "Parasites are microbes that:",
    "answers": [
      { "text": "Live only in soil", "correct": false },
      { "text": "Establish and multiply in hosts", "correct": true },
      { "text": "Feed on dead matter only", "correct": false },
      { "text": "Cannot infect humans", "correct": false },
      { "text": "Exist only extracellularly", "correct": false }
    ],
    "explanation": "Parasites are microbes that can establish themselves and multiply in the hosts. Parasite microbes may be either pathogens or commensals."
  },
// 368 7
  {
    "question": "Parasites may be classified as:",
    "answers": [
      { "text": "Vectors or reservoirs", "correct": false },
      { "text": "Local or systemic", "correct": false },
      { "text": "Pathogens or commensals", "correct": true },
      { "text": "Primary or secondary", "correct": false },
      { "text": "Acute or chronic", "correct": false }
    ],
    "explanation": "Parasites are microbes that can establish themselves and multiply in the hosts. Parasite microbes may be either pathogens or commensals."
  },
// 369 8
  {
    "question": "Pathogens are microorganisms capable of:",
    "answers": [
      { "text": "Surviving in soil", "correct": false },
      { "text": "Producing disease in the host", "correct": true },
      { "text": "Living harmlessly in hosts", "correct": false },
      { "text": "Transmitting through vectors only", "correct": false },
      { "text": "Causing inflammation only", "correct": false }
    ],
    "explanation": "Pathogens (from Greek pathos, disease, and gen, to produce) are the microorganisms or agents, which are capable of producing disesase in the host. Its ability to cause disease is called pathogenicity."
  },
// 370 9
  {
    "question": "The ability of a pathogen to cause disease is termed:",
    "answers": [
      { "text": "Infectivity", "correct": false },
      { "text": "Virulence", "correct": false },
      { "text": "Pathogenicity", "correct": true },
      { "text": "Invasiveness", "correct": false },
      { "text": "Toxicity", "correct": false }
    ],
    "explanation": "Pathogens (from Greek pathos, disease, and gen, to produce) are the microorganisms or agents, which are capable of producing disesase in the host. Its ability to cause disease is called pathogenicity."
  },
// 371 10
  {
    "question": "Primary (frank) pathogens produce disease in:",
    "answers": [
      { "text": "Immunocompromised individuals only", "correct": false },
      { "text": "Previously healthy individuals with intact defenses", "correct": true },
      { "text": "Animals only", "correct": false },
      { "text": "Neonates only", "correct": false },
      { "text": "Elderly individuals only", "correct": false }
    ],
    "explanation": "Primary (frank) pathogens are the organisms, which are capable of producing disease in previously healthy individuals with intact immunological defenses. "
  },
// 372 11
  {
    "question": "Opportunist pathogens cause disease when host defenses are:",
    "answers": [
      { "text": "Intact", "correct": false },
      { "text": "Stimulated", "correct": false },
      { "text": "Impaired or compromised", "correct": true },
      { "text": "Genetically strong", "correct": false },
      { "text": "Boosted by vaccination", "correct": false }
    ],
    "explanation": "Opportunist pathogens: These are able to cause disease only when such defenses are impaired or compromised."
  },
// 373 12
  {
    "question": "Commensals are microorganisms that:",
    "answers": [
      { "text": "Always cause disease", "correct": false },
      { "text": "Live in harmony without causing damage", "correct": true },
      { "text": "Survive only in soil", "correct": false },
      { "text": "Act only as vectors", "correct": false },
      { "text": "Multiply only in blood", "correct": false }
    ],
    "explanation": "Commensals are the microorganisms that live in complete harmony with the host without causing any damage to it."
  },
// 374 13
  {
    "question": "Infection is defined as the lodgement and multiplication of a parasite:",
    "answers": [
      { "text": "In the bloodstream only", "correct": false },
      { "text": "On the skin surface only", "correct": false },
      { "text": "In or on host tissues", "correct": true },
      { "text": "In the environment", "correct": false },
      { "text": "In vectors only", "correct": false }
    ],
    "explanation": "The lodgement and multiplication of a parasite in or on the tissues of a host constitute infection. It does not invariably result in disease."
  },
// 375 14
  {
    "question": "Infection does not invariably result in:",
    "answers": [
      { "text": "Colonization", "correct": false },
      { "text": "Transmission", "correct": false },
      { "text": "Disease", "correct": true },
      { "text": "Multiplication", "correct": false },
      { "text": "Exposure", "correct": false }
    ],
    "explanation": "The lodgement and multiplication of a parasite in or on the tissues of a host constitute infection. It does not invariably result in disease."
  },
// 376 15
  {
    "question": "Primary infection refers to:",
    "answers": [
      { "text": "Reinfection by same parasite", "correct": false },
      { "text": "Infection after vaccination", "correct": false },
      { "text": "Initial infection with a parasite", "correct": true },
      { "text": "Infection by multiple parasites", "correct": false },
      { "text": "Hospital-acquired infection", "correct": false }
    ],
    "explanation": "Initial infection with a parasite in a host is termed primary infection. "
  },
// 377 16
  {
    "question": "Reinfection is defined as:",
    "answers": [
      { "text": "Infection by new parasite", "correct": false },
      { "text": "Infection from hospital", "correct": false },
      { "text": "Subsequent infection by same parasite", "correct": true },
      { "text": "Infection after treatment", "correct": false },
      { "text": "Latent recurrence", "correct": false }
    ],
    "explanation": "Subsequent infections by the same parasite in the host are termed reinfections. "
  },
// 378 17
  {
    "question": "Secondary infection occurs when:",
    "answers": [
      { "text": "Same parasite reappears", "correct": false },
      { "text": "Infection spreads systemically", "correct": false },
      { "text": "New parasite infects a host with lowered resistance", "correct": true },
      { "text": "Infection is hospital acquired", "correct": false },
      { "text": "Infection remains hidden", "correct": false }
    ],
    "explanation": "When a new parasite sets up an infection in a host whose resistance is lowered by a pre-existing infectious disease, this is termed secondary infection. "
  },
// 379 18
  {
    "question": "Local infection indicates:",
    "answers": [
      { "text": "No systemic effect", "correct": false },
      { "text": "Infection limited to bloodstream", "correct": false },
      { "text": "Localized sepsis producing generalized effects", "correct": true },
      { "text": "Mild infection", "correct": false },
      { "text": "Infection of mucosa only", "correct": false }
    ],
    "explanation": "The term local infection (more appropriately local sepsis) indicates a condition where, due to infection or sepsis at localized sites such as appendix or tonsils, generalized effects are produced. "
  },
// 380 19
  {
    "question": "Cross infection refers to:",
    "answers": [
      { "text": "Spread within same organ", "correct": false },
      { "text": "Infection from vectors", "correct": false },
      { "text": "New infection from another host or external source", "correct": true },
      { "text": "Reinfection by same parasite", "correct": false },
      { "text": "Congenital infection", "correct": false }
    ],
    "explanation": "When in a patient already suffering from a disease a new infection is set up from another host or another external source, it is termed cross infection. "
  },
// 381 20
  {
    "question": "Cross infections occurring in hospitals are termed:",
    "answers": [
      { "text": "Latent infections", "correct": false },
      { "text": "Secondary infections", "correct": false },
      { "text": "Iatrogenic infections", "correct": false },
      { "text": "Nosocomial infections", "correct": true },
      { "text": "Opportunistic infections", "correct": false }
    ],
    "explanation": "Cross infections occurring in hospitals are called nosocomial infections (from Greek nosocomion hospital)."
  },
// 382 21
  {
    "question": "Iatrogenic infections are:",
    "answers": [
      { "text": "Animal-borne infections", "correct": false },
      { "text": "Soil-borne infections", "correct": false },
      { "text": "Physician-induced infections", "correct": true },
      { "text": "Vector-borne infections", "correct": false },
      { "text": "Food-borne infections", "correct": false }
    ],
    "explanation": "The term iatrogenic infection refers to physician induced infections resulting from investigative, therapeutic or other procedures. "
  },
// 383 22
  {
    "question": "Latent infection refers to parasites that:",
    "answers": [
      { "text": "Die after entry", "correct": false },
      { "text": "Remain hidden and proliferate when resistance falls", "correct": true },
      { "text": "Immediately cause disease", "correct": false },
      { "text": "Infect only immunodeficient hosts", "correct": false },
      { "text": "Survive only in vectors", "correct": false }
    ],
    "explanation": "Some parasites, following infection, may remain in the tissues in a latent or hidden form proliferating and producing clinical disease when the host resistance is lowered. This is termed latent infection."
  },
// 384 23
  {
    "question": "The most common source of infection for humans is:",
    "answers": [
      { "text": "Animals", "correct": false },
      { "text": "Soil", "correct": false },
      { "text": "Water", "correct": false },
      { "text": "Human beings", "correct": true },
      { "text": "Insects", "correct": false }
    ],
    "explanation": "The most common source of infection for human beings is human beings themselves. The parasite may originate from a patient or carrier. A carrier is person who harbors the microorganisms without suffering from any ill effect because of it."
  },
// 385 24
  {
    "question": "A person harboring microorganisms without ill effects is called a:",
    "answers": [
      { "text": "Vector", "correct": false },
      { "text": "Reservoir", "correct": false },
      { "text": "Carrier", "correct": true },
      { "text": "Host", "correct": false },
      { "text": "Commensal", "correct": false }
    ],
    "explanation": "A carrier is person who harbors the microorganisms without suffering from any ill effect because of it."
  },
// 386 25
  {
    "question": "Animals that maintain parasites in nature and serve as infection sources are called:",
    "answers": [
      { "text": "Primary hosts", "correct": false },
      { "text": "Intermediate hosts", "correct": false },
      { "text": "Reservoir hosts", "correct": true },
      { "text": "Vectors", "correct": false },
      { "text": "Carriers", "correct": false }
    ],
    "explanation": "Many pathogens are capable of causing infections in both human beings and animals. Therefore, animals may act as a source of infection of such organisms. These, animals serve to maintain the parasite in nature and act as reservoir and they are, therefore, called reservoir hosts."
  },
// 387 26
  {
    "question": "Diseases transmissible to humans from animals are called:",
    "answers": [
      { "text": "Nosocomial diseases", "correct": false },
      { "text": "Iatrogenic diseases", "correct": false },
      { "text": "Vector-borne diseases", "correct": false },
      { "text": "Zoonosis", "correct": true },
      { "text": "Opportunistic infections", "correct": false }
    ],
    "explanation": "The diseases and infections, which are transmissible to man from animals are called zoonosis. "
  },
// 388 27
  {
    "question": "Diseases transmitted by blood-sucking insects are termed:",
    "answers": [
      { "text": "Food-borne diseases", "correct": false },
      { "text": "Airborne diseases", "correct": false },
      { "text": "Arthropod-borne diseases", "correct": true },
      { "text": "Zoonotic diseases", "correct": false },
      { "text": "Contact diseases", "correct": false }
    ],
    "explanation": "Blood-sucking insects, such as mosquitos, ticks, mites, flies, and lice may transmit pathogens to human beings and diseases so caused are called arthropod borne diseases."
  },
// 389 28
  {
    "question": "Insects that transmit infections are called:",
    "answers": [
      { "text": "Carriers", "correct": false },
      { "text": "Hosts", "correct": false },
      { "text": "Reservoirs", "correct": false },
      { "text": "Vectors", "correct": true },
      { "text": "Commensals", "correct": false }
    ],
    "explanation": "Insects that transmit infections are called vectors. Vector-borne transmission can be of two types either mechanical (external) or biological (internal)."
  },
// 390 29
  {
    "question": "Vector-borne transmission may be:",
    "answers": [
      { "text": "Direct or indirect", "correct": false },
      { "text": "Local or systemic", "correct": false },
      { "text": "Mechanical or biological", "correct": true },
      { "text": "Acute or chronic", "correct": false },
      { "text": "Active or passive", "correct": false }
    ],
    "explanation": "Insects that transmit infections are called vectors. Vector-borne transmission can be of two types either mechanical (external) or biological (internal)."
  },
// 391 30
  {
    "question": "Transmission across the placental barrier to the fetus is called:",
    "answers": [
      { "text": "Horizontal transmission", "correct": false },
      { "text": "Direct transmission", "correct": false },
      { "text": "Vector transmission", "correct": false },
      { "text": "Vertical transmission", "correct": true },
      { "text": "Contact transmission", "correct": false }
    ],
    "explanation": "7.	Some pathogens are able to cross the placental barrier and reach the fetus in utero. This is known as vertical transmission. Examples: So-called TORCH agents (Toxoplasma gondii, rubella virus, cytomegalovirus and herpes virus), varicella virus, syphilis, hepatitis B, Coxsackie B and AIDS."
  },
// 392 31
  {
    "question": "Transmission via contaminated inanimate objects is through:",
    "answers": [
      { "text": "Vectors", "correct": false },
      { "text": "Droplets", "correct": false },
      { "text": "Fomites", "correct": true },
      { "text": "Reservoirs", "correct": false },
      { "text": "Aerosols", "correct": false }
    ],
    "explanation": "2.	Indirect contact may be through the agency of fomites, which are inanimate objects such as clothing, pencils or toys, which may be contaminated by a pathogen from one person and act as a vehicle for its transmission to another. This embraces a variety of mechanisms including the traditional 5 F’s—”flies, fingers, fomites, food and fluid”."
  },
// 393 32
  {
    "question": "Intestinal infections are generally acquired by:",
    "answers": [
      { "text": "Inhalation", "correct": false },
      { "text": "Injection", "correct": false },
      { "text": "Ingestion of contaminated food or drink", "correct": true },
      { "text": "Vector bite", "correct": false },
      { "text": "Skin contact", "correct": false }
    ],
    "explanation": "4.	Intestinal infections are generally acquired by the ingestion of food or drink contaminated by pathogens. Infection transmitted by ingestion may be waterborne (cholera), food borne (food poisoning) or handborne (dysentery). Diseases transmitted by water and food include chiefly infections of the alimentary tract, e. g. acute diarrheas, typhoid fever, cholera, polio, hepatitis A, food poisoning and intestinal parasites."
  },
// 394 33
  {
    "question": "Direct inoculation into skin or mucosa occurs in:",
    "answers": [
      { "text": "Cholera", "correct": false },
      { "text": "Influenza", "correct": false },
      { "text": "Rabies", "correct": true },
      { "text": "Measles", "correct": false },
      { "text": "Dysentery", "correct": false }
    ],
    "explanation": "5.	The disease agent may be inoculated directly in to the skin or mucosa, e.g. rabies virus deposited subcutaneously by dog bite, tetanus spores implanted in deep wounds, and arboviruses injected by insect vectors."
  },
// 395 34
  {
    "question": "Circulation of bacteria in blood is termed:",
    "answers": [
      { "text": "Septicemia", "correct": false },
      { "text": "Pyemia", "correct": false },
      { "text": "Bacteremia", "correct": true },
      { "text": "Toxemia", "correct": false },
      { "text": "Viremia", "correct": false }
    ],
    "explanation": "Circulation of bacteria in the blood is known as bacteremia."
  },
// 396 35
  {
    "question": "Septicemia is characterized by bacteria that:",
    "answers": [
      { "text": "Remain localized", "correct": false },
      { "text": "Circulate and multiply producing toxins", "correct": true },
      { "text": "Form granulomas", "correct": false },
      { "text": "Infect mucosa only", "correct": false },
      { "text": "Stay latent", "correct": false }
    ],
    "explanation": "Septicemia. It is the condition where bacteria circulate and multiply in the blood, form toxic products and cause high, swinging type of fever."
  },
// 397 36
  {
    "question": "Pyemia refers to septicemia with:",
    "answers": [
      { "text": "Viral replication", "correct": false },
      { "text": "Toxin release only", "correct": false },
      { "text": "Multiple abscesses in internal organs", "correct": true },
      { "text": "Skin lesions only", "correct": false },
      { "text": "Lymph node enlargement only", "correct": false }
    ],
    "explanation": "Pyema. It is the condition where pyogenic bacteria produce septicemia with multiple abscesses in internal organs such as the spleen, liver and kidney."
  },
// ===========================
// MYCOBACTERIUM TUBERCULOSIS
//============================
// 398 1

  {
    "question": "The genus Mycobacterium belongs to which family?",
    "answers": [
      { "text": "Mycobacteriaceae", "correct": true },
      { "text": "Corynebacteriaceae", "correct": false },
      { "text": "Actinomycetaceae", "correct": false },
      { "text": "Bacillaceae", "correct": false },
      { "text": "Nocardiaceae", "correct": false }
    ],
    "explanation": "The genus Mycobacterium belongs to the family Mycobacteriaceae. Mycobacterium tuberculosis (MTB) and Mycobacterium leprae, the causative agents of tuberculosis (TB) and Hansen’s disease (leprosy), respectively. "
  },
// 399 2
  {
    "question": "The causative agent of tuberculosis is:",
    "answers": [
      { "text": "Mycobacterium leprae", "correct": false },
      { "text": "Mycobacterium avium", "correct": false },
      { "text": "Mycobacterium tuberculosis", "correct": true },
      { "text": "Mycobacterium bovis", "correct": false },
      { "text": "Mycobacterium kansasii", "correct": false }
    ],
    "explanation": "The genus Mycobacterium belongs to the family Mycobacteriaceae. Mycobacterium tuberculosis (MTB) and Mycobacterium leprae, the causative agents of tuberculosis (TB) and Hansen’s disease (leprosy), respectively. "
  },
// 400 3
  {
    "question": "Hansen’s disease is caused by:",
    "answers": [
      { "text": "Mycobacterium bovis", "correct": false },
      { "text": "Mycobacterium avium", "correct": false },
      { "text": "Mycobacterium leprae", "correct": true },
      { "text": "Mycobacterium tuberculosis", "correct": false },
      { "text": "Mycobacterium kansasii", "correct": false }
    ],
    "explanation": "The genus Mycobacterium belongs to the family Mycobacteriaceae. Mycobacterium tuberculosis (MTB) and Mycobacterium leprae, the causative agents of tuberculosis (TB) and Hansen’s disease (leprosy), respectively. "
  },
// 401 4
  {
    "question": "The name “Mycobacterium” means:",
    "answers": [
      { "text": "Acid-resistant bacterium", "correct": false },
      { "text": "Rod-shaped bacterium", "correct": false },
      { "text": "Fungus-like bacterium", "correct": true },
      { "text": "Capsule-forming bacterium", "correct": false },
      { "text": "Slow-growing bacterium", "correct": false }
    ],
    "explanation": "The name Mycobacterium, meaning ‘fungus like bacterium’ is derived from the mould like appearance of Mycobacterium tuberculosis when growing in liquid media. "
  },
// 402 5
  {
    "question": "The term “Mycobacterium” is derived from the organism’s:",
    "answers": [
      { "text": "Gram-staining pattern", "correct": false },
      { "text": "Acid-fast nature", "correct": false },
      { "text": "Motility", "correct": false },
      { "text": "Mould-like appearance in liquid media", "correct": true },
      { "text": "Spore formation", "correct": false }
    ],
    "explanation": "The name Mycobacterium, meaning ‘fungus like bacterium’ is derived from the mould like appearance of Mycobacterium tuberculosis when growing in liquid media. "
  },
// 403 6
  {
    "question": "Which of the following is a characteristic of Mycobacterium tuberculosis?",
    "answers": [
      { "text": "Anaerobic", "correct": false },
      { "text": "Motile", "correct": false },
      { "text": "Capsulated", "correct": false },
      { "text": "Spore-forming", "correct": false },
      { "text": "Aerobic", "correct": true }
    ],
    "explanation": "They are aerobic, nonmotile, noncapsulated and nonsporing. Growth is generally slow. The genus includes obligate parasites, opportunistic pathogens and saprophytes."
  },
// 404 7
  {
    "question": "Growth of mycobacteria is generally:",
    "answers": [
      { "text": "Rapid", "correct": false },
      { "text": "Moderate", "correct": false },
      { "text": "Slow", "correct": true },
      { "text": "Immediate", "correct": false },
      { "text": "Variable", "correct": false }
    ],
    "explanation": "They are aerobic, nonmotile, noncapsulated and nonsporing. Growth is generally slow. The genus includes obligate parasites, opportunistic pathogens and saprophytes."
  },
// 405 8
  {
    "question": "The genus Mycobacterium includes all EXCEPT:",
    "answers": [
      { "text": "Obligate parasites", "correct": false },
      { "text": "Opportunistic pathogens", "correct": false },
      { "text": "Saprophytes", "correct": false },
      { "text": "Strict symbionts", "correct": true },
      { "text": "Pathogens", "correct": false }
    ],
    "explanation": "They are aerobic, nonmotile, noncapsulated and nonsporing. Growth is generally slow. The genus includes obligate parasites, opportunistic pathogens and saprophytes."
  },
// 406 9
  {
    "question": "Mycobacteria resist decolorization with:",
    "answers": [
      { "text": "Dilute alkali", "correct": false },
      { "text": "Gram’s iodine", "correct": false },
      { "text": "Dilute mineral acids", "correct": true },
      { "text": "Distilled water", "correct": false },
      { "text": "Acetone", "correct": false }
    ],
    "explanation": "Mycobacteria do not stain readily, but once stained with hot carbolfuchsin or other aryl methane dyes, they resist decolorization with dilute mineral acids (or alcohol). Mycobacteria are, therefore, known as acid-fast bacilli (AFB)."
  },
// 407 10
  {
    "question": "Mycobacteria are therefore known as:",
    "answers": [
      { "text": "Gram-positive cocci", "correct": false },
      { "text": "Encapsulated bacilli", "correct": false },
      { "text": "Acid-fast bacilli", "correct": true },
      { "text": "Spore-forming rods", "correct": false },
      { "text": "Pleomorphic bacteria", "correct": false }
    ],
    "explanation": "Mycobacteria do not stain readily, but once stained with hot carbolfuchsin or other aryl methane dyes, they resist decolorization with dilute mineral acids (or alcohol). Mycobacteria are, therefore, known as acid-fast bacilli (AFB)."
  },
// 408 11
  {
    "question": "The acid-fast property is demonstrated after staining with:",
    "answers": [
      { "text": "Methylene blue", "correct": false },
      { "text": "Crystal violet", "correct": false },
      { "text": "Safranin", "correct": false },
      { "text": "Hot carbol fuchsin", "correct": true },
      { "text": "India ink", "correct": false }
    ],
    "explanation": "Mycobacteria do not stain readily, but once stained with hot carbolfuchsin or other aryl methane dyes, they resist decolorization with dilute mineral acids (or alcohol). Mycobacteria are, therefore, known as acid-fast bacilli (AFB)."
  },
// 409 12
  {
    "question": "Mycobacterium tuberculosis is best described morphologically as:",
    "answers": [
      { "text": "Curved comma-shaped bacillus", "correct": false },
      { "text": "Slender straight or slightly curved rod", "correct": true },
      { "text": "Spherical coccus", "correct": false },
      { "text": "Filamentous branching rod", "correct": false },
      { "text": "Spiral organism", "correct": false }
    ],
    "explanation": "Mycobacterium tuberculosis is a slender, straight, or slightly curved rod with rounded ends, about 3 mm × 0.3 µm, in pairs or as small clumps. The bacilli are non-motile, non-sporing, non-capsulated and acid fast. "
  },
// 410 13
  {
    "question": "Typical arrangement of M. tuberculosis bacilli is:",
    "answers": [
      { "text": "Chains", "correct": false },
      { "text": "Clusters only", "correct": false },
      { "text": "Singles only", "correct": false },
      { "text": "Pairs or small clumps", "correct": true },
      { "text": "Tetrads", "correct": false }
    ],
    "explanation": "Mycobacterium tuberculosis is a slender, straight, or slightly curved rod with rounded ends, about 3 mm × 0.3 µm, in pairs or as small clumps. The bacilli are non-motile, non-sporing, non-capsulated and acid fast. "
  },
// 411 14
  {
    "question": "Mycobacterium tuberculosis is:",
    "answers": [
      { "text": "Motile and capsulated", "correct": false },
      { "text": "Motile and spore-forming", "correct": false },
      { "text": "Non-motile and spore-forming", "correct": false },
      { "text": "Non-motile, non-sporing, non-capsulated", "correct": true },
      { "text": "Capsulated and spore-forming", "correct": false }
    ],
    "explanation": "Mycobacterium tuberculosis is a slender, straight, or slightly curved rod with rounded ends, about 3 mm × 0.3 µm, in pairs or as small clumps. The bacilli are non-motile, non-sporing, non-capsulated and acid fast. "
  },
// 412 15
  {
    "question": "The Ziehl-Neelsen method is primarily used to:",
    "answers": [
      { "text": "Demonstrate spores", "correct": false },
      { "text": "Demonstrate capsules", "correct": false },
      { "text": "Stain acid-fast organisms", "correct": true },
      { "text": "Gram classification", "correct": false },
      { "text": "Motility testing", "correct": false }
    ],
    "explanation": "The Ziehl-Neilsen acid-fast stain is useful in staining organisms either from cultures or from clinical material. With this stain, the tubercle bacilli stain bright red, while the tissue cells and other organisms are stained blue."
  },
// 413 16
  {
    "question": "Fluorescent dyes used for mycobacteria include:",
    "answers": [
      { "text": "Malachite green and safranin", "correct": false },
      { "text": "Auramine O and rhodamine", "correct": true },
      { "text": "Crystal violet and iodine", "correct": false },
      { "text": "Eosin and hematoxylin", "correct": false },
      { "text": "Lactophenol cotton blue", "correct": false }
    ],
    "explanation": "When stained with carbol fuchsin by the Ziehl Neelsen method or by fluorescent dyes (auramine O, rhodamine), Mycobacteria resist decolorization by 20% sulfuric acid and absolute alcohol for 10 minutes (acid and alcohol fast)."
  },
// 414 17
  {
    "question": "Acid-fast bacilli resist decolorization by:",
    "answers": [
      { "text": "5% acetic acid", "correct": false },
      { "text": "Alcohol only", "correct": false },
      { "text": "Heat only", "correct": false },
      { "text": "20% sulfuric acid and absolute alcohol", "correct": true },
      { "text": "Gram’s iodine", "correct": false }
    ],
    "explanation": "When stained with carbol fuchsin by the Ziehl Neelsen method or by fluorescent dyes (auramine O, rhodamine), Mycobacteria resist decolorization by 20% sulfuric acid and absolute alcohol for 10 minutes (acid and alcohol fast)."
  },
// 415 18
  {
    "question": "In Ziehl-Neelsen staining, tubercle bacilli appear:",
    "answers": [
      { "text": "Blue", "correct": false },
      { "text": "Green", "correct": false },
      { "text": "Red", "correct": true },
      { "text": "Black", "correct": false },
      { "text": "Yellow", "correct": false }
    ],
    "explanation": "The Ziehl-Neilsen acid-fast stain is useful in staining organisms either from cultures or from clinical material. With this stain, the tubercle bacilli stain bright red, while the tissue cells and other organisms are stained blue."
  },
// 416 19
  {
    "question": "In Ziehl-Neelsen staining, tissue cells appear:",
    "answers": [
      { "text": "Red", "correct": false },
      { "text": "Blue", "correct": true },
      { "text": "Pink", "correct": false },
      { "text": "Orange", "correct": false },
      { "text": "Brown", "correct": false }
    ],
    "explanation": "The Ziehl-Neilsen acid-fast stain is useful in staining organisms either from cultures or from clinical material. With this stain, the tubercle bacilli stain bright red, while the tissue cells and other organisms are stained blue."
  },
// 417 20
  {
    "question": "Primary tuberculosis refers to:",
    "answers": [
      { "text": "Reinfection", "correct": false },
      { "text": "Reactivation disease", "correct": false },
      { "text": "Initial infection in a host", "correct": true },
      { "text": "Drug-resistant TB", "correct": false },
      { "text": "Disseminated TB", "correct": false }
    ],
    "explanation": "Primary tuberculosis is the initial infection by tubercle bacilli in a host. In endemic countries like India, this usually occurs in young children. "
  },
// 418 21
  {
    "question": "Primary tuberculosis commonly occurs in:",
    "answers": [
      { "text": "Elderly", "correct": false },
      { "text": "Immunocompromised adults", "correct": false },
      { "text": "Young children in endemic areas", "correct": true },
      { "text": "Adolescents only", "correct": false },
      { "text": "Neonates", "correct": false }
    ],
    "explanation": "Primary tuberculosis is the initial infection by tubercle bacilli in a host. In endemic countries like India, this usually occurs in young children. "
  },
// 419 22
  {
    "question": "Primary tuberculosis begins with:",
    "answers": [
      { "text": "Skin contact", "correct": false },
      { "text": "Ingestion", "correct": false },
      { "text": "Inhalation of mycobacteria", "correct": true },
      { "text": "Blood transfusion", "correct": false },
      { "text": "Sexual transmission", "correct": false }
    ],
    "explanation": "This begins with inhalation of the mycobacteria and ends with a T cell-mediated immune response that induces hypersensitivity to the organisms and controls 95% of infections."
  },
// 420 23
  {
    "question": "The usual site of initial TB infection is the:",
    "answers": [
      { "text": "Liver", "correct": false },
      { "text": "Kidney", "correct": false },
      { "text": "Lung", "correct": true },
      { "text": "Spleen", "correct": false },
      { "text": "Brain", "correct": false }
    ],
    "explanation": "The site of the initial infection is usually the lung, following the inhalation of bacilli. "
  },
// 421 24
  {
    "question": "The bacilli in primary tuberculosis are first engulfed by:",
    "answers": [
      { "text": "Neutrophils", "correct": false },
      { "text": "Lymphocytes", "correct": false },
      { "text": "Platelets", "correct": false },
      { "text": "Alveolar macrophages", "correct": true },
      { "text": "Eosinophils", "correct": false }
    ],
    "explanation": "These bacilli engulfed by alveolar macrophages multiply and give rise to a subpleural focus of tuberculous pneumonia, commonly located in the lower lobe or the lower part of the upper lobe to form the initial lesion or Ghon focus."
  },
// 422 25
  {
    "question": "The initial lesion in primary TB is called:",
    "answers": [
      { "text": "Rankin lesion", "correct": false },
      { "text": "Ghon focus", "correct": true },
      { "text": "Caseous node", "correct": false },
      { "text": "Koch nodule", "correct": false },
      { "text": "Primary cavity", "correct": false }
    ],
    "explanation": "Ghon focus is the initial lesion of primary tuberculosis commonly located in the lower lobe or the lower part of the upper lobe of the lungs. The formation of Ghon focus is due to the multiplied alveolar macrophages brought by the bacilli."
  },
// 423 26
  {
    "question": "The Ghon focus is commonly located in:",
    "answers": [
      { "text": "Apex of lung", "correct": false },
      { "text": "Middle lobe only", "correct": false },
      { "text": "Lower lobe or lower part of upper lobe", "correct": true },
      { "text": "Pleural cavity", "correct": false },
      { "text": "Trachea", "correct": false }
    ],
    "explanation": "Ghon focus is the initial lesion of primary tuberculosis commonly located in the lower lobe or the lower part of the upper lobe of the lungs. The formation of Ghon focus is due to the multiplied alveolar macrophages brought by the bacilli."
  },
// 424 27
  {
    "question": "The primary complex consists of:",
    "answers": [
      { "text": "Ghon focus only", "correct": false },
      { "text": "Lymph nodes only", "correct": false },
      { "text": "Cavitary lesion only", "correct": false },
      { "text": "Ghon focus and enlarged hilar lymph nodes", "correct": true },
      { "text": "Pleural effusion and cavity", "correct": false }
    ],
    "explanation": "The Ghon focus, together with the enlarged hilar lymph nodes, form the primary complex."
  },
// 425 28
  {
    "question": "Post-primary tuberculosis is also known as:",
    "answers": [
      { "text": "Congenital TB", "correct": false },
      { "text": "Disseminated TB", "correct": false },
      { "text": "Secondary or adult TB", "correct": true },
      { "text": "Latent TB", "correct": false },
      { "text": "Primary complex TB", "correct": false }
    ],
    "explanation": ""
  },
// 426 29
  {
    "question": "Reactivation tuberculosis results from:",
    "answers": [
      { "text": "Enhanced immunity", "correct": false },
      { "text": "Antibiotic resistance only", "correct": false },
      { "text": "Suppression of cellular immunity", "correct": true },
      { "text": "Vaccination failure only", "correct": false },
      { "text": "Increased antibody levels", "correct": false }
    ],
    "explanation": "The post-primary (secondary or adult) type of tuberculosis is due to reactivation of latent infection (post-primary progression, endogenous reactivation) or exogenous reinfection and differs from the primary type in many respects. "
  },
// 427 30
  {
    "question": "The most usual specimen for pulmonary TB diagnosis is:",
    "answers": [
      { "text": "Blood", "correct": false },
      { "text": "Urine", "correct": false },
      { "text": "Sputum", "correct": true },
      { "text": "CSF", "correct": false },
      { "text": "Pleural fluid", "correct": false }
    ],
    "explanation": "The most usual specimen for diagnosis of pulmonary tuberculosis is sputum. Direct or concentration smears of sputum are examined."
  },
// 428 31
  {
    "question": "Smears for TB microscopy should be prepared from:",
    "answers": [
      { "text": "Watery saliva", "correct": false },
      { "text": "Entire sputum sample", "correct": false },
      { "text": "Thick purulent portion", "correct": true },
      { "text": "Frothy portion", "correct": false },
      { "text": "Supernatant fluid", "correct": false }
    ],
    "explanation": "Smears should be prepared from the thick purulent part of the sputum. Smears are dried, heat fixed and stained by the Ziehl-Neelsen technique (hot stain procedure)."
  },
// 429 32
  {
    "question": "Ziehl-Neelsen staining is a:",
    "answers": [
      { "text": "Cold stain procedure", "correct": false },
      { "text": "Hot stain procedure", "correct": true },
      { "text": "Fluorescent stain only", "correct": false },
      { "text": "Capsule stain", "correct": false },
      { "text": "Negative stain", "correct": false }
    ],
    "explanation": "Smears should be prepared from the thick purulent part of the sputum. Smears are dried, heat fixed and stained by the Ziehl-Neelsen technique (hot stain procedure)."
  },
// 430 33
  {
    "question": "Bacteriological diagnosis of TB can be established by:",
    "answers": [
      { "text": "Direct microscopy only", "correct": false },
      { "text": "Culture only", "correct": false },
      { "text": "Serology only", "correct": false },
      { "text": "Direct microscopy, culture, and molecular methods", "correct": true },
      { "text": "Imaging only", "correct": false }
    ],
    "explanation": "Bacteriological diagnosis of tuberculosis can be established by direct microscopy, culture examination or by animal inoculation test, serology, direct detection by molecular probes, rapid and automated methods. "
  },
// 431 34
  {
    "question": "Koch phenomenon demonstrates:",
    "answers": [
      { "text": "Drug resistance", "correct": false },
      { "text": "Capsule formation", "correct": false },
      { "text": "Acquired increased resistance in infected animal", "correct": true },
      { "text": "Spore formation", "correct": false },
      { "text": "Toxin production", "correct": false }
    ],
    "explanation": "Koch phenomenon demonstrates acquired increased resistance in the infected animal."
  },
// 432 35
  {
    "question": "The tuberculin test is based on:",
    "answers": [
      { "text": "Immediate hypersensitivity", "correct": false },
      { "text": "Antibody neutralization", "correct": false },
      { "text": "Complement fixation", "correct": false },
      { "text": "Delayed Type IV hypersensitivity", "correct": true },
      { "text": "Immune complex deposition", "correct": false }
    ],
    "explanation": "Tuberculin test: The test is based on the fact that persons infected with tubercle bacilli develop hypersensitivity to the proteins of the organism and this test is delayed (Type IV) hypersensitivity reaction. "
  },
// 433 36
  {
    "question": "Hypersensitivity in the tuberculin test is directed against:",
    "answers": [
      { "text": "Lipids", "correct": false },
      { "text": "Polysaccharides", "correct": false },
      { "text": "Proteins of tubercle bacilli", "correct": true },
      { "text": "Nucleic acids", "correct": false },
      { "text": "Capsules", "correct": false }
    ],
    "explanation": "Tuberculin test: The test is based on the fact that persons infected with tubercle bacilli develop hypersensitivity to the proteins of the organism and this test is delayed (Type IV) hypersensitivity reaction. "
  },
// 434 37
  {
    "question": "The mainstay of tuberculosis treatment is:",
    "answers": [
      { "text": "Surgery", "correct": false },
      { "text": "Radiotherapy", "correct": false },
      { "text": "Chemotherapy", "correct": true },
      { "text": "Immunotherapy alone", "correct": false },
      { "text": "Plasmapheresis", "correct": false }
    ],
    "explanation": "Chemotherapy forms the mainstay of treatment of tuberculosis. "
  },
// 435 38
  {
    "question": "Preventive measures against tuberculosis include all EXCEPT:",
    "answers": [
      { "text": "Chemoprophylaxis", "correct": false },
      { "text": "Vaccination", "correct": false },
      { "text": "General health measures", "correct": false },
      { "text": "Vector control", "correct": true },
      { "text": "Immunoprophylaxis", "correct": false }
    ],
    "explanation": "Preventive measures against tuberculosis include chemoprophylaxis, vaccination, and general health measures. Immnunoprophylaxis with BCG in endemic countries."
  },
// 436 39
  {
    "question": "Immunoprophylaxis against TB in endemic countries is done using:",
    "answers": [
      { "text": "OPV", "correct": false },
      { "text": "MMR", "correct": false },
      { "text": "DPT", "correct": false },
      { "text": "BCG", "correct": true },
      { "text": "Hepatitis B vaccine", "correct": false }
    ],
    "explanation": "Preventive measures against tuberculosis include chemoprophylaxis, vaccination, and general health measures. Immnunoprophylaxis with BCG in endemic countries."
  },
// 437 40
  {
    "question": "The immune response that controls most primary TB infections is:",
    "answers": [
      { "text": "Antibody-mediated immunity", "correct": false },
      { "text": "Complement activation", "correct": false },
      { "text": "T cell-mediated immunity", "correct": true },
      { "text": "Innate immunity only", "correct": false },
      { "text": "Passive immunity", "correct": false }
    ],
    "explanation": "This begins with inhalation of the mycobacteria and ends with a T cell-mediated immune response that induces hypersensitivity to the organisms and controls 95% of infections. "
  },
// =================================
// NEISSERIA
//==================================
// 438 1
  {
    "question": "Members of the genus Neisseria are best described as:",
    "answers": [
      { "text": "Anaerobic gram-positive cocci in clusters", "correct": false },
      { "text": "Aerobic gram-negative cocci in pairs with flattened adjacent sides", "correct": true },
      { "text": "Facultative gram-positive bacilli in chains", "correct": false },
      { "text": "Anaerobic gram-negative rods with spores", "correct": false },
      { "text": "Microaerophilic curved bacilli", "correct": false }
    ],
    "explanation": "Neisseria species are aerobic, gram-negative cocci that typically appear in pairs (diplococci) with flattened adjacent sides."
  },
// 439 2
  {
    "question": "The typical microscopic arrangement of Neisseria species is:",
    "answers": [
      { "text": "Chains", "correct": false },
      { "text": "Clusters", "correct": false },
      { "text": "Diplococci", "correct": true },
      { "text": "Tetrads", "correct": false },
      { "text": "Palisades", "correct": false }
    ],
    "explanation": "Neisseria species are characteristically arranged as diplococci, meaning pairs of cocci with flattened adjacent sides."
  },
// 450 3
  {
    "question": "The adjacent sides of Neisseria diplococci are characteristically:",
    "answers": [
      { "text": "Pointed", "correct": false },
      { "text": "Rounded", "correct": false },
      { "text": "Concave and flattened", "correct": true },
      { "text": "Irregular", "correct": false },
      { "text": "Spiral", "correct": false }
    ],
    "explanation": "The adjacent sides of Neisseria diplococci are concave and flattened, giving them a characteristic kidney bean shape."
  },
// 451 4
  {
    "question": "Members of the genus Neisseria are uniformly:",
    "answers": [
      { "text": "Catalase-negative and oxidase-negative", "correct": false },
      { "text": "Oxidase-positive only", "correct": false },
      { "text": "Catalase-positive only", "correct": false },
      { "text": "Oxidase-positive and mostly catalase-producing", "correct": true },
      { "text": "Acid-fast", "correct": false }
    ],
    "explanation": "Neisseria species are oxidase-positive and most produce catalase, which are important biochemical characteristics."
  },
// 452 5
  {
    "question": "The primary human pathogens of the genus Neisseria are:",
    "answers": [
      { "text": "N. lactamica and N. sicca", "correct": false },
      { "text": "N. flavescens and N. subflava", "correct": false },
      { "text": "N. gonorrhoeae and N. meningitidis", "correct": true },
      { "text": "N. elongata and N. mucosa", "correct": false },
      { "text": "N. cinerea and N. polysaccharea", "correct": false }
    ],
    "explanation": "The main pathogenic species in humans are Neisseria gonorrhoeae, which causes gonorrhea, and Neisseria meningitidis, which causes meningitis."
  },
// 453 6
  {
    "question": "Neisseria gonorrhoeae causes:",
    "answers": [
      { "text": "Syphilis", "correct": false },
      { "text": "Gonorrhea", "correct": true },
      { "text": "Chancroid", "correct": false },
      { "text": "Trichomoniasis", "correct": false },
      { "text": "Lymphogranuloma venereum", "correct": false }
    ],
    "explanation": "Neisseria gonorrhoeae is the causative agent of gonorrhea, a common sexually transmitted infection."
  },
// 454 7
  {
    "question": "In urethral discharge smears of acute gonorrhea, gonococci appear as:",
    "answers": [
      { "text": "Gram-positive cocci in chains", "correct": false },
      { "text": "Intracellular gram-negative kidney-shaped diplococci", "correct": true },
      { "text": "Extracellular gram-positive bacilli", "correct": false },
      { "text": "Acid-fast rods", "correct": false },
      { "text": "Spiral-shaped organisms", "correct": false }
    ],
    "explanation": "Gonococci appear as intracellular gram-negative kidney-shaped diplococci within polymorphonuclear leukocytes in urethral discharge smears."
  },
// 455 8
  {
    "question": "Gonococci are found predominantly within:",
    "answers": [
      { "text": "Lymphocytes", "correct": false },
      { "text": "Macrophages", "correct": false },
      { "text": "Polymorphonuclear leukocytes", "correct": true },
      { "text": "Epithelial cells", "correct": false },
      { "text": "Erythrocytes", "correct": false }
    ],
    "explanation": "Gonococci are predominantly found inside polymorphonuclear leukocytes (PMNs) during infection."
  },
// 456 9
  {
    "question": "Some infected cells in gonorrhea may contain:",
    "answers": [
      { "text": "A single coccus", "correct": false },
      { "text": "Two cocci", "correct": false },
      { "text": "Ten cocci", "correct": false },
      { "text": "Up to a hundred cocci", "correct": true },
      { "text": "Thousands of cocci", "correct": false }
    ],
    "explanation": "In gonorrhea, some infected polymorphonuclear leukocytes may contain up to a hundred gonococci."
  },
// 457 10
  {
    "question": "N. gonorrhoeae grows well on:",
    "answers": [
      { "text": "Blood agar and MacConkey agar", "correct": false },
      { "text": "Chocolate agar and Mueller Hinton agar", "correct": true },
      { "text": "Nutrient agar and Sabouraud agar", "correct": false },
      { "text": "Lowenstein-Jensen medium", "correct": false },
      { "text": "Thiosulfate-citrate-bile salts-sucrose agar", "correct": false }
    ],
    "explanation": "N. gonorrhoeae grows well on enriched media such as chocolate agar and Mueller Hinton agar."
  },
// 458 11
  {
    "question": "A popular selective medium for N. gonorrhoeae is:",
    "answers": [
      { "text": "MacConkey agar", "correct": false },
      { "text": "Blood agar", "correct": false },
      { "text": "Thayer-Martin medium", "correct": true },
      { "text": "Chocolate agar without additives", "correct": false },
      { "text": "Nutrient broth", "correct": false }
    ],
    "explanation": "Thayer-Martin medium is a selective medium containing antibiotics that suppress normal flora, facilitating the isolation of N. gonorrhoeae."
  },
// 459 12
  {
    "question": "Thayer-Martin medium contains chocolate agar with:",
    "answers": [
      { "text": "Penicillin, streptomycin, amphotericin", "correct": false },
      { "text": "Vancomycin, colistin, nystatin", "correct": true },
      { "text": "Ceftriaxone, ciprofloxacin, doxycycline", "correct": false },
      { "text": "Tetracycline, erythromycin, rifampicin", "correct": false },
      { "text": "Gentamicin, clindamycin, metronidazole", "correct": false }
    ],
    "explanation": "Thayer-Martin medium contains chocolate agar supplemented with vancomycin, colistin, and nystatin to inhibit contaminating bacteria and fungi."
  },
// 460 13
  {
    "question": "Thayer-Martin medium inhibits:",
    "answers": [
      { "text": "Only fungi", "correct": false },
      { "text": "Only gram-positive bacteria", "correct": false },
      { "text": "Most contaminants including nonpathogenic Neisseria", "correct": true },
      { "text": "Only anaerobes", "correct": false },
      { "text": "Only viruses", "correct": false }
    ],
    "explanation": "Thayer-Martin medium inhibits most contaminants, including nonpathogenic Neisseria species, allowing selective growth of pathogenic Neisseria."
  },
// 461 14
  {
    "question": "Colonies of N. gonorrhoeae after 24 hours are typically:",
    "answers": [
      { "text": "Large, opaque, flat, smooth", "correct": false },
      { "text": "Small, round, translucent, convex", "correct": true },
      { "text": "Pigmented and spreading", "correct": false },
      { "text": "Dry and wrinkled", "correct": false },
      { "text": "Mucoid with hemolysis", "correct": false }
    ],
    "explanation": "N. gonorrhoeae colonies after 24 hours are typically small, round, translucent, and convex in appearance."
  },
// 462 15
  {
    "question": "Optimal incubation of N. gonorrhoeae requires:",
    "answers": [
      { "text": "Anaerobic environment", "correct": false },
      { "text": "Microaerophilic environment without CO₂", "correct": false },
      { "text": "Moist aerobic environment with 5–10% CO₂", "correct": true },
      { "text": "High oxygen tension only", "correct": false },
      { "text": "Refrigeration conditions", "correct": false }
    ],
    "explanation": "N. gonorrhoeae grows best in a moist aerobic environment supplemented with 5–10% CO₂."
  },
// 463 16
  {
    "question": "Which is NOT a surface structure of N. gonorrhoeae?",
    "answers": [
      { "text": "Pili", "correct": false },
      { "text": "Por proteins (Protein I)", "correct": false },
      { "text": "Opa proteins (Protein II)", "correct": false },
      { "text": "Rmp (Protein III)", "correct": false },
      { "text": "Teichoic acid", "correct": true }
    ],
    "explanation": "Teichoic acid is a component of gram-positive bacterial cell walls and is not found on the surface of N. gonorrhoeae, a gram-negative bacterium."
  },
// 464 17
  {
    "question": "Gonorrhea is primarily transmitted through:",
    "answers": [
      { "text": "Airborne droplets", "correct": false },
      { "text": "Contaminated water", "correct": false },
      { "text": "Sexual contact", "correct": true },
      { "text": "Vector bites", "correct": false },
      { "text": "Food contamination", "correct": false }
    ],
    "explanation": "Gonorrhea is primarily transmitted through sexual contact."
  },
// 465 18
  {
    "question": "The incubation period of gonorrhea is:",
    "answers": [
      { "text": "1–2 hours", "correct": false },
      { "text": "12–24 hours", "correct": false },
      { "text": "2–8 days", "correct": true },
      { "text": "2–3 weeks", "correct": false },
      { "text": "1–2 months", "correct": false }
    ],
    "explanation": "The incubation period for gonorrhea typically ranges from 2 to 8 days after exposure."
  },
// 466 19
  {
    "question": "The most common presentation of gonorrhea in men is:",
    "answers": [
      { "text": "Prostatitis", "correct": false },
      { "text": "Acute urethritis", "correct": true },
      { "text": "Epididymitis", "correct": false },
      { "text": "Cystitis", "correct": false },
      { "text": "Orchitis", "correct": false }
    ],
    "explanation": "Acute urethritis, characterized by inflammation of the urethra, is the most common presentation of gonorrhea in men."
  },
// 467 20
  {
    "question": "Classic symptoms of gonorrhea in men include:",
    "answers": [
      { "text": "Hematuria and flank pain", "correct": false },
      { "text": "Dysuria and purulent penile discharge", "correct": true },
      { "text": "Genital ulcers and rash", "correct": false },
      { "text": "Painless lymphadenopathy", "correct": false },
      { "text": "Fever and jaundice", "correct": false }
    ],
    "explanation": "Classic symptoms of gonorrhea in men include painful urination (dysuria) and purulent (pus-like) penile discharge."
  },
// 468 21
  {
    "question": "In men, infection may extend to the:",
    "answers": [
      { "text": "Kidneys only", "correct": false },
      { "text": "Bladder only", "correct": false },
      { "text": "Prostate, seminal vesicles, and epididymis", "correct": true },
      { "text": "Testes only", "correct": false },
      { "text": "Liver and spleen", "correct": false }
    ],
    "explanation": "In men, gonorrheal infection can extend beyond the urethra to involve the prostate, seminal vesicles, and epididymis."
  },
// 469 22
  {
    "question": "Gonorrhea in women is commonly:",
    "answers": [
      { "text": "Rapidly fatal", "correct": false },
      { "text": "Always symptomatic", "correct": false },
      { "text": "Asymptomatic", "correct": true },
      { "text": "Limited to the cervix", "correct": false },
      { "text": "Self-limiting without complications", "correct": false }
    ],
    "explanation": "Gonorrhea in women is often asymptomatic, which can delay diagnosis and treatment."
  },
// 470 23
  {
    "question": "In women, infection may spread to the:",
    "answers": [
      { "text": "Ovaries only", "correct": false },
      { "text": "Bartholin’s glands, endometrium, and fallopian tubes", "correct": true },
      { "text": "Kidneys and ureters", "correct": false },
      { "text": "Liver and pancreas", "correct": false },
      { "text": "Vagina only", "correct": false }
    ],
    "explanation": "In women, gonorrheal infection can spread to Bartholin’s glands, the endometrium, and fallopian tubes, potentially causing pelvic inflammatory disease."
  },
// 471 24
  {
    "question": "A serious complication of untreated gonorrhea in women is:",
    "answers": [
      { "text": "Infertility", "correct": true },
      { "text": "Renal failure", "correct": false },
      { "text": "Myocarditis", "correct": false },
      { "text": "Encephalitis", "correct": false },
      { "text": "Hepatitis", "correct": false }
    ],
    "explanation": "Untreated gonorrhea in women can lead to pelvic inflammatory disease, which may cause infertility."
  },
// 472 25
  {
    "question": "Penicillin is no longer the drug of choice due to:",
    "answers": [
      { "text": "Severe toxicity", "correct": false },
      { "text": "Poor absorption", "correct": false },
      { "text": "Widespread gonococcal resistance", "correct": true },
      { "text": "High cost", "correct": false },
      { "text": "Limited availability", "correct": false }
    ],
    "explanation": "Penicillin is no longer preferred for gonorrhea treatment due to widespread resistance among gonococcal strains."
  },
// 473 26
  {
    "question": "Gonococcal resistance to penicillin is mainly due to:",
    "answers": [
      { "text": "Viral mutation", "correct": false },
      { "text": "Fungal contamination", "correct": false },
      { "text": "Chromosomal mutants", "correct": true },
      { "text": "Plasmid loss", "correct": false },
      { "text": "Host immune suppression", "correct": false }
    ],
    "explanation": "Resistance to penicillin in gonococci is mainly due to chromosomal mutations that reduce antibiotic susceptibility."
  },
// 474 27
  {
    "question": "Current initial therapy for uncomplicated gonorrhea includes:",
    "answers": [
      { "text": "Penicillin V", "correct": false },
      { "text": "Amoxicillin", "correct": false },
      { "text": "Ceftriaxone", "correct": true },
      { "text": "Vancomycin", "correct": false },
      { "text": "Chloramphenicol", "correct": false }
    ],
    "explanation": "Ceftriaxone is the current recommended initial therapy for uncomplicated gonorrhea due to its efficacy and resistance profile."
  },
// 475 28
  {
    "question": "Additional therapy for dual infection with Chlamydia includes:",
    "answers": [
      { "text": "Rifampicin", "correct": false },
      { "text": "Isoniazid", "correct": false },
      { "text": "Doxycycline or azithromycin", "correct": true },
      { "text": "Metronidazole", "correct": false },
      { "text": "Gentamicin", "correct": false }
    ],
    "explanation": "Doxycycline or azithromycin is added to treat possible co-infection with Chlamydia trachomatis."
  },
// 476 29
  {
    "question": "Gram stain of urethral specimens for diagnosing gonorrhea is accurate in:",
    "answers": [
      { "text": "All patients", "correct": false },
      { "text": "Symptomatic males only", "correct": true },
      { "text": "Females only", "correct": false },
      { "text": "Asymptomatic carriers", "correct": false },
      { "text": "Neonates only", "correct": false }
    ],
    "explanation": "Gram stain is highly accurate for diagnosing gonorrhea in symptomatic males but less reliable in females and asymptomatic individuals."
  },
// 477 30
  {
    "question": "The most sensitive and specific diagnostic method for gonorrhea is:",
    "answers": [
      { "text": "Serology", "correct": false },
      { "text": "Gram stain", "correct": false },
      { "text": "Culture", "correct": false },
      { "text": "Antigen detection", "correct": false },
      { "text": "PCR", "correct": true }
    ],
    "explanation": "Polymerase chain reaction (PCR) is the most sensitive and specific method for diagnosing gonorrhea."
  },
// 478 31
  {
    "question": "Neisseria meningitidis is described as:",
    "answers": [
      { "text": "Gram-positive bacilli", "correct": false },
      { "text": "Gram-negative diplococci with fastidious growth", "correct": true },
      { "text": "Acid-fast rods", "correct": false },
      { "text": "Anaerobic cocci", "correct": false },
      { "text": "Spore-forming bacilli", "correct": false }
    ],
    "explanation": "Neisseria meningitidis is a fastidious, encapsulated, aerobic gram-negative diplococcus known for causing meningitis."
  },
// 479 32
  {
    "question": "Diseases caused by N. meningitidis include:",
    "answers": [
      { "text": "Tuberculosis", "correct": false },
      { "text": "Typhoid fever", "correct": false },
      { "text": "Meningitis", "correct": true },
      { "text": "Syphilis", "correct": false },
      { "text": "Cholera", "correct": false }
    ],
    "explanation": "N. meningitidis is a major cause of bacterial meningitis and meningococcemia."
  },
// 480 33
  {
    "question": "A definitive diagnostic method for N. meningitidis infection is:",
    "answers": [
      { "text": "Antigen detection tests", "correct": false },
      { "text": "Gram stain alone", "correct": false },
      { "text": "Culture", "correct": true },
      { "text": "Serology", "correct": false },
      { "text": "Skin testing", "correct": false }
    ],
    "explanation": "Culture of N. meningitidis from blood, cerebrospinal fluid, or other sterile sites is the definitive diagnostic method."
  },
// 481 34
  {
    "question": "Gram stain of cerebrospinal fluid in meningococcal infection is:",
    "answers": [
      { "text": "Insensitive and nonspecific", "correct": false },
      { "text": "Sensitive and specific", "correct": true },
      { "text": "Definitive", "correct": false },
      { "text": "Obsolete", "correct": false },
      { "text": "Contraindicated", "correct": false }
    ],
    "explanation": "Gram stain of CSF is a rapid, sensitive, and specific method for detecting meningococcal infection."
  },
// 482 35
  {
    "question": "Tests to detect meningococcal antigens are:",
    "answers": [
      { "text": "Highly sensitive and specific", "correct": true },
      { "text": "Definitive", "correct": false },
      { "text": "Insensitive and nonspecific", "correct": false },
      { "text": "Rapid and confirmatory", "correct": false },
      { "text": "Superior to culture", "correct": false }
    ],
    "explanation": "Antigen detection tests for meningococcal disease are highly sensitive and specific, aiding rapid diagnosis."
  },
// =========================
// RETROVIRUS - HIV
// =========================
// 483 1
  {
    "question": "Retroviruses belong to which viral family?",
    "answers": [
      { "text": "Flaviviridae", "correct": false },
      { "text": "Retroviridae", "correct": true },
      { "text": "Herpesviridae", "correct": false },
      { "text": "Paramyxoviridae", "correct": false },
      { "text": "Togaviridae", "correct": false }
    ],
    "explanation": "Retroviruses belong to the family Retroviridae, characterized by their reverse transcription process."
  },
// 484 2
  {
    "question": "The defining biochemical feature of retroviruses is the presence of:",
    "answers": [
      { "text": "RNA polymerase", "correct": false },
      { "text": "DNA-dependent RNA polymerase", "correct": false },
      { "text": "RNA-dependent DNA polymerase", "correct": true },
      { "text": "Integrase only", "correct": false },
      { "text": "Protease only", "correct": false }
    ],
    "explanation": "Retroviruses uniquely contain RNA-dependent DNA polymerase, also known as reverse transcriptase."
  },
// 485 3
  {
    "question": "RNA-dependent DNA polymerase is also known as:",
    "answers": [
      { "text": "Transcriptase", "correct": false },
      { "text": "Reverse transcriptase", "correct": true },
      { "text": "Integrase", "correct": false },
      { "text": "Ligase", "correct": false },
      { "text": "Polymerase III", "correct": false }
    ],
    "explanation": "RNA-dependent DNA polymerase is commonly called reverse transcriptase, an enzyme critical for retroviral replication."
  },
// 486 4
  {
    "question": "HIV is the etiologic agent of:",
    "answers": [
      { "text": "Hepatitis", "correct": false },
      { "text": "Tuberculosis", "correct": false },
      { "text": "Acquired Immunodeficiency Syndrome", "correct": true },
      { "text": "Infectious mononucleosis", "correct": false },
      { "text": "Viral hemorrhagic fever", "correct": false }
    ],
    "explanation": "HIV is the virus responsible for causing Acquired Immunodeficiency Syndrome (AIDS)."
  },
// 487 5
  {
    "question": "The illness later identified as AIDS was first described in:",
    "answers": [
      { "text": "1975", "correct": false },
      { "text": "1978", "correct": false },
      { "text": "1981", "correct": true },
      { "text": "1983", "correct": false },
      { "text": "1985", "correct": false }
    ],
    "explanation": "AIDS was first clinically described in 1981, marking the beginning of recognition of the epidemic."
  },
// 489 6
  {
    "question": "HIV-1 was isolated by the end of:",
    "answers": [
      { "text": "1980", "correct": false },
      { "text": "1981", "correct": false },
      { "text": "1982", "correct": false },
      { "text": "1983", "correct": true },
      { "text": "1984", "correct": false }
    ],
    "explanation": "HIV-1 was first isolated in 1983, which was a critical step in understanding the virus causing AIDS."
  },
// 490 7
  {
    "question": "HIV-2 was first isolated from patients in:",
    "answers": [
      { "text": "South America", "correct": false },
      { "text": "East Asia", "correct": false },
      { "text": "Central Europe", "correct": false },
      { "text": "West Africa", "correct": true },
      { "text": "Australia", "correct": false }
    ],
    "explanation": "HIV-2 was initially isolated from patients in West Africa, where it is more prevalent."
  },
// 491 8
  {
    "question": "Compared with HIV-1, HIV-2 appears to be:",
    "answers": [
      { "text": "More virulent", "correct": false },
      { "text": "Drug resistant", "correct": false },
      { "text": "Less pathogenic", "correct": true },
      { "text": "More transmissible", "correct": false },
      { "text": "Genetically unstable", "correct": false }
    ],
    "explanation": "HIV-2 is generally less pathogenic and less transmissible compared to HIV-1."
  },
// 492 9
  {
    "question": "The approximate size of HIV is:",
    "answers": [
      { "text": "20–40 nm", "correct": false },
      { "text": "40–60 nm", "correct": false },
      { "text": "60–80 nm", "correct": false },
      { "text": "90–120 nm", "correct": true },
      { "text": "150–200 nm", "correct": false }
    ],
    "explanation": "HIV virions are approximately 90 to 120 nanometers in diameter."
  },
// 493 10
  {
    "question": "The shape of HIV virion is:",
    "answers": [
      { "text": "Filamentous", "correct": false },
      { "text": "Helical", "correct": false },
      { "text": "Bullet-shaped", "correct": false },
      { "text": "Icosahedral non-enveloped", "correct": false },
      { "text": "Spherical enveloped", "correct": true }
    ],
    "explanation": "HIV virions are spherical and enveloped, typical of retroviruses."
  },
// 494 11
  {
    "question": "The nucleocapsid of HIV contains:",
    "answers": [
      { "text": "Only a helical core", "correct": false },
      { "text": "An outer helical shell only", "correct": false },
      { "text": "An outer icosahedral shell and inner cone-shaped core", "correct": true },
      { "text": "A cuboidal core", "correct": false },
      { "text": "Multiple segmented cores", "correct": false }
    ],
    "explanation": "The HIV nucleocapsid has an outer icosahedral shell and an inner cone-shaped core."
  },
// 495 12
  {
    "question": "Retroviruses are considered diploid because they contain:",
    "answers": [
      { "text": "Double-stranded DNA", "correct": false },
      { "text": "Two capsids", "correct": false },
      { "text": "Two identical RNA genomes", "correct": true },
      { "text": "Two nucleocapsids", "correct": false },
      { "text": "Segmented genomes", "correct": false }
    ],
    "explanation": "Retroviruses are diploid because they carry two identical RNA genomes."
  },
// 496 13
  {
    "question": "The HIV genome is:",
    "answers": [
      { "text": "Double-stranded DNA", "correct": false },
      { "text": "Single-stranded DNA", "correct": false },
      { "text": "Negative-sense RNA", "correct": false },
      { "text": "Positive-sense single-stranded RNA", "correct": true },
      { "text": "Circular RNA", "correct": false }
    ],
    "explanation": "HIV has a positive-sense single-stranded RNA genome."
  },
// 497 14
  {
    "question": "Which enzyme is characteristically present within the HIV capsid?",
    "answers": [
      { "text": "Neuraminidase", "correct": false },
      { "text": "Reverse transcriptase", "correct": true },
      { "text": "DNA ligase", "correct": false },
      { "text": "Helicase", "correct": false },
      { "text": "Topoisomerase", "correct": false }
    ],
    "explanation": "Reverse transcriptase is the key enzyme present inside the HIV capsid."
  },
// 498 15
  {
    "question": "The HIV envelope is composed of:",
    "answers": [
      { "text": "Peptidoglycan", "correct": false },
      { "text": "Lipopolysaccharide", "correct": false },
      { "text": "Lipoprotein", "correct": true },
      { "text": "Glycocalyx only", "correct": false },
      { "text": "Capsomeres", "correct": false }
    ],
    "explanation": "The HIV envelope is primarily composed of lipoproteins derived from the host cell membrane."
  },
// 499 16
  {
    "question": "Major virus-coded envelope proteins form:",
    "answers": [
      { "text": "Ribosomal subunits", "correct": false },
      { "text": "Surface spikes and transmembrane pedicles", "correct": true },
      { "text": "Nuclear pores", "correct": false },
      { "text": "Matrix granules", "correct": false },
      { "text": "Envelope pores", "correct": false }
    ],
    "explanation": "HIV envelope proteins form surface spikes and transmembrane structures essential for viral entry."
  },
// 500 17
  {
    "question": "HIV is inactivated in 10 minutes at:",
    "answers": [
      { "text": "37°C", "correct": false },
      { "text": "45°C", "correct": false },
      { "text": "50°C", "correct": false },
      { "text": "60°C", "correct": true },
      { "text": "80°C", "correct": false }
    ],
    "explanation": "HIV is inactivated after 10 minutes exposure to 60°C."
  },
// 501 18
  {
    "question": "HIV is inactivated within seconds at:",
    "answers": [
      { "text": "70°C", "correct": false },
      { "text": "80°C", "correct": false },
      { "text": "90°C", "correct": false },
      { "text": "100°C", "correct": true },
      { "text": "120°C", "correct": false }
    ],
    "explanation": "HIV is rapidly inactivated within seconds at 100°C."
  },
// 502 19
  {
    "question": "At temperatures above 60°C, HIV is inactivated approximately:",
    "answers": [
      { "text": "10-fold each hour", "correct": false },
      { "text": "50-fold each hour", "correct": false },
      { "text": "100-fold each hour", "correct": false },
      { "text": "1000-fold each hour", "correct": true },
      { "text": "Instantly", "correct": false }
    ],
    "explanation": "HIV is inactivated approximately 1000-fold each hour at temperatures above 60°C."
  },
// 503 20
  {
    "question": "In dried blood at room temperature (20–25°C), HIV may survive up to:",
    "answers": [
      { "text": "24 hours", "correct": false },
      { "text": "48 hours", "correct": false },
      { "text": "72 hours", "correct": true },
      { "text": "5 days", "correct": false },
      { "text": "7 days", "correct": false }
    ],
    "explanation": "HIV can survive up to 72 hours in dried blood at room temperature."
  },
// 504 21
  {
    "question": "In HIV infection, the T4:T8 cell ratio is typically:",
    "answers": [
      { "text": "Normal", "correct": false },
      { "text": "Elevated", "correct": false },
      { "text": "Reversed", "correct": true },
      { "text": "Absent", "correct": false },
      { "text": "Doubled", "correct": false }
    ],
    "explanation": "HIV infection typically causes a reversal of the T4:T8 cell ratio due to depletion of CD4+ T cells."
  },
// 505 22
  {
    "question": "Platelet count in HIV patients commonly shows:",
    "answers": [
      { "text": "Polycythemia", "correct": false },
      { "text": "Leukocytosis", "correct": false },
      { "text": "Thrombocytosis", "correct": false },
      { "text": "Thrombocytopenia", "correct": true },
      { "text": "Pancytosis", "correct": false }
    ],
    "explanation": "Thrombocytopenia, or low platelet count, is commonly observed in HIV-infected patients."
  },
// 506 23
  {
    "question": "A high mutation rate in HIV promotes:",
    "answers": [
      { "text": "Vaccine stability", "correct": false },
      { "text": "Rapid cure", "correct": false },
      { "text": "Drug resistance", "correct": true },
      { "text": "Reduced virulence", "correct": false },
      { "text": "Host immunity", "correct": false }
    ],
    "explanation": "The high mutation rate of HIV contributes to the development of drug resistance."
  },
// 507 24
  {
    "question": "AZT is recommended for asymptomatic or mildly symptomatic patients with CD4 counts less than:",
    "answers": [
      { "text": "200/mL", "correct": true },
      { "text": "300/mL", "correct": false },
      { "text": "400/mL", "correct": false },
      { "text": "500/mL", "correct": false },
      { "text": "800/mL", "correct": false }
    ],
    "explanation": "AZT is recommended for patients with CD4 counts below 200/mL to delay disease progression."
  },
// 508 25
  {
    "question": "AZT is also recommended for:",
    "answers": [
      { "text": "Neonatal prophylaxis only", "correct": false },
      { "text": "Elderly patients", "correct": false },
      { "text": "Infected pregnant women to reduce fetal transmission", "correct": true },
      { "text": "Post-surgical prophylaxis", "correct": false },
      { "text": "Cancer chemotherapy", "correct": false }
    ],
    "explanation": "AZT is used in infected pregnant women to reduce the risk of mother-to-child HIV transmission."
  },
// 509 26
  {
    "question": "Combination antiviral therapy using multiple drugs is termed:",
    "answers": [
      { "text": "Monotherapy", "correct": false },
      { "text": "Pulse therapy", "correct": false },
      { "text": "Sequential therapy", "correct": false },
      { "text": "Highly active antiretroviral treatment", "correct": true },
      { "text": "Suppressive therapy", "correct": false }
    ],
    "explanation": "Combination therapy using multiple antiretroviral drugs is called Highly Active Antiretroviral Treatment (HAART)."
  },
// 510 27
  {
    "question": "HAART reduces viral levels to:",
    "answers": [
      { "text": "Half baseline", "correct": false },
      { "text": "One-tenth baseline", "correct": false },
      { "text": "Nearly zero", "correct": true },
      { "text": "Undetectable in all cases permanently", "correct": false },
      { "text": "Fluctuating levels", "correct": false }
    ],
    "explanation": "HAART can reduce HIV viral load to nearly zero, though not permanently undetectable in all cases."
  },
// 511 28
  {
    "question": "Basic PEP regimen consists of:",
    "answers": [
      { "text": "One drug", "correct": false },
      { "text": "Two-drug combination", "correct": true },
      { "text": "Three-drug combination", "correct": false },
      { "text": "Four-drug combination", "correct": false },
      { "text": "Five-drug combination", "correct": false }
    ],
    "explanation": "Basic post-exposure prophylaxis (PEP) typically involves a two-drug combination."
  },
// 512 29
  {
    "question": "Expanded PEP regimen consists of:",
    "answers": [
      { "text": "Two drugs", "correct": false },
      { "text": "Three drugs", "correct": true },
      { "text": "Four drugs", "correct": false },
      { "text": "Five drugs", "correct": false },
      { "text": "Six drugs", "correct": false }
    ],
    "explanation": "Expanded PEP regimens usually include three antiretroviral drugs for higher risk exposures."
  },
// 513 30
  {
    "question": "PEP should ideally be started within:",
    "answers": [
      { "text": "24 hours", "correct": false },
      { "text": "12 hours", "correct": false },
      { "text": "6 hours", "correct": true },
      { "text": "2 hours", "correct": false },
      { "text": "1 week", "correct": false }
    ],
    "explanation": "PEP is most effective when started within 6 hours after potential HIV exposure."
  },
// 514 31
  {
    "question": "HIV can withstand:",
    "answers": [
      { "text": "Autoclaving", "correct": false },
      { "text": "Pasteurization", "correct": false },
      { "text": "Lyophilization", "correct": true },
      { "text": "Boiling", "correct": false },
      { "text": "UV radiation", "correct": false }
    ],
    "explanation": "HIV can withstand lyophilization (freeze-drying), but not autoclaving or boiling."
  },
// 515 32
  {
    "question": "HIV is completely inactivated by treatment for 10 minutes with:",
    "answers": [
      { "text": "1% saline", "correct": false },
      { "text": "Distilled water", "correct": false },
      { "text": "10% household bleach", "correct": true },
      { "text": "5% glucose", "correct": false },
      { "text": "Ether vapor", "correct": false }
    ],
    "explanation": "Treatment with 10% household bleach for 10 minutes completely inactivates HIV."
  },
// 516 33
  {
    "question": "HIV is also inactivated by extreme pH values of:",
    "answers": [
      { "text": "pH 3 and 10", "correct": false },
      { "text": "pH 4 and 11", "correct": false },
      { "text": "pH 1.0 and 13.0", "correct": true },
      { "text": "pH 2 and 12", "correct": false },
      { "text": "pH 5 and 9", "correct": false }
    ],
    "explanation": "HIV is inactivated by exposure to extreme pH values such as 1.0 and 13.0."
  },
// 517 34
  {
    "question": "HIV spreads by how many primary modes?",
    "answers": [
      { "text": "One", "correct": false },
      { "text": "Two", "correct": false },
      { "text": "Three", "correct": true },
      { "text": "Four", "correct": false },
      { "text": "Five", "correct": false }
    ],
    "explanation": "HIV primarily spreads through three main modes: sexual contact, blood exposure, and mother-to-child transmission."
  },
// 518 35
  {
    "question": "Which of the following is NOT a mode of HIV transmission listed in the text?",
    "answers": [
      { "text": "Sexual contact", "correct": false },
      { "text": "Blood and blood products", "correct": false },
      { "text": "Mother-to-child transmission", "correct": false },
      { "text": "Airborne droplets", "correct": true },
      { "text": "Perinatal transmission", "correct": false }
    ],
    "explanation": "HIV is not transmitted via airborne droplets."
  },
// 519 36
  {
    "question": "AIDS represents:",
    "answers": [
      { "text": "Early viral infection", "correct": false },
      { "text": "Latent carrier state", "correct": false },
      { "text": "Irreversible breakdown of immune defense mechanisms", "correct": true },
      { "text": "Self-limiting viral illness", "correct": false },
      { "text": "Hypersensitivity disorder", "correct": false }
    ],
    "explanation": "AIDS is characterized by an irreversible breakdown of the immune system."
  },
// 520 37
  {
    "question": "Patients with AIDS are especially prone to:",
    "answers": [
      { "text": "Autoimmune diseases", "correct": false },
      { "text": "Metabolic disorders", "correct": false },
      { "text": "Opportunistic infections and malignancies", "correct": true },
      { "text": "Congenital anomalies", "correct": false },
      { "text": "Endocrine disorders", "correct": false }
    ],
    "explanation": "AIDS patients are highly susceptible to opportunistic infections and certain cancers."
  },
// 521 38
  {
    "question": "An oral indicator suggestive of AIDS is:",
    "answers": [
      { "text": "Dental fluorosis", "correct": false },
      { "text": "Aphthous ulcer", "correct": false },
      { "text": "Acute necrotizing ulcerative gingivitis", "correct": true },
      { "text": "Enamel hypoplasia", "correct": false },
      { "text": "Geographic tongue", "correct": false }
    ],
    "explanation": "Acute necrotizing ulcerative gingivitis is a common oral manifestation in AIDS patients."
  },
// 522 39
  {
    "question": "The most sensitive approved commercial assay for HIV infection is:",
    "answers": [
      { "text": "Western blot", "correct": false },
      { "text": "Rapid antigen test", "correct": false },
      { "text": "ELISA", "correct": true },
      { "text": "PCR", "correct": false },
      { "text": "Viral culture", "correct": false }
    ],
    "explanation": "ELISA is the most sensitive and widely used commercial assay for HIV screening."
  },
// 523 40
  {
    "question": "Absolute CD4+ T cell count in HIV infection is usually:",
    "answers": [
      { "text": ">1000/mm³", "correct": false },
      { "text": ">800/mm³", "correct": false },
      { "text": ">500/mm³", "correct": false },
      { "text": "<500/mm³", "correct": true },
      { "text": "<200/mm³", "correct": false }
    ],
    "explanation": "HIV infection typically results in a CD4+ T cell count below 500/mm³."
  },
// 524 41
  {
    "question": "The maximum time window to start PEP for effectiveness is:",
    "answers": [
      { "text": "24 hours", "correct": false },
      { "text": "48 hours", "correct": false },
      { "text": "72 hours", "correct": true },
      { "text": "5 days", "correct": false },
      { "text": "1 week", "correct": false }
    ],
    "explanation": "PEP should ideally be started within 72 hours of exposure for maximum effectiveness."
  },
// 525 42
  {
    "question": "Recommended duration of PEP therapy is:",
    "answers": [
      { "text": "1 week", "correct": false },
      { "text": "2 weeks", "correct": false },
      { "text": "3 weeks", "correct": true },
      { "text": "4 weeks", "correct": false },
      { "text": "6 weeks", "correct": false }
    ],
    "explanation": "The recommended duration for PEP therapy is 3 weeks to ensure adequate viral suppression."
  },
// 526 43
  {
    "question": "Post-PEP HIV testing should be done at:",
    "answers": [
      { "text": "1 and 2 months", "correct": false },
      { "text": "2 and 4 months", "correct": false },
      { "text": "3 and 6 months", "correct": true },
      { "text": "6 and 12 months", "correct": false },
      { "text": "Only at 6 months", "correct": false }
    ],
    "explanation": "HIV testing after PEP is recommended at 3 and 6 months post-exposure to confirm status."
  },
// 527 44
  {
    "question": "If the HIV test at 6 months post-exposure is negative:",
    "answers": [
      { "text": "Restart PEP", "correct": false },
      { "text": "Lifelong monitoring required", "correct": false },
      { "text": "Monthly testing required", "correct": false },
      { "text": "No further testing required", "correct": true },
      { "text": "Immediate ART required", "correct": false }
    ],
    "explanation": "A negative HIV test at 6 months post-exposure generally indicates no infection, so no further testing is required."
  },
// 528 45
  {
    "question": "The mainstay of HIV treatment is:",
    "answers": [
      { "text": "Vaccination", "correct": false },
      { "text": "Immunotherapy alone", "correct": false },
      { "text": "Antiretroviral treatment", "correct": true },
      { "text": "Antibiotic therapy", "correct": false },
      { "text": "Surgical therapy", "correct": false }
    ],
    "explanation": "Antiretroviral treatment is the primary and most effective approach for managing HIV infection."
  }

];

let questions=[];
let currentQuestionIndex=0;
let score=0;
let answersRecord=[];
let timeLeft=EXAM_TIME;
let timer;

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const explanationElement=document.getElementById("explanation");
const progressBar=document.getElementById("progress-bar");
const navigatorDiv=document.getElementById("navigator");
const scoreDisplay=document.getElementById("scoreDisplay");
const reviewSection=document.getElementById("review-section");
const restartBtn=document.getElementById("restart-btn");
const submitBtn=document.getElementById("submit-btn");
const timerElement=document.getElementById("timer");

Array.prototype.shuffle=function(){
return this.sort(()=>Math.random()-0.5);
}

function startExam(){

questions=[...allQuestions].shuffle().slice(0,QUESTION_LIMIT);
answersRecord=new Array(questions.length).fill(null);

currentQuestionIndex=0;
score=0;

generateNavigator();
showQuestion();
startTimer();
}

function startTimer(){

timer=setInterval(()=>{

timeLeft--;

let min=Math.floor(timeLeft/60);
let sec=timeLeft%60;

timerElement.innerText=
String(min).padStart(2,'0')+":"+
String(sec).padStart(2,'0');

if(timeLeft<=0){

clearInterval(timer);
finishExam();

}

},1000);
}

function generateNavigator(){

navigatorDiv.innerHTML="";

for(let i=0;i<questions.length;i++){

let btn=document.createElement("button");
btn.innerText=i+1;
btn.classList.add("nav-btn");

btn.onclick=()=>{

currentQuestionIndex=i;
showQuestion();

}

navigatorDiv.appendChild(btn);

}

}

function showQuestion(){

resetState();

let q=questions[currentQuestionIndex];

questionElement.innerText=
(currentQuestionIndex+1)+". "+q.question;

updateProgress();

let answers=[...q.answers].shuffle();

answers.forEach(answer=>{

const button=document.createElement("button");
button.innerText=answer.text;

if(answer.correct){
button.dataset.correct=true;
}

button.onclick=selectAnswer;

answerButtons.appendChild(button);

});

}

function resetState(){

explanationElement.innerText="";
nextButton.style.display="none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}

}

function selectAnswer(e){

const selected=e.target;
const correct=selected.dataset.correct==="true";

answersRecord[currentQuestionIndex]=selected.innerText;

if(correct){

selected.classList.add("correct");
score++;

}else{

selected.classList.add("wrong");

explanationElement.innerText=
"Explanation: "+questions[currentQuestionIndex].explanation;

}

Array.from(answerButtons.children).forEach(btn=>{

if(btn.dataset.correct==="true"){
btn.classList.add("correct");
}

btn.disabled=true;

});

document.querySelectorAll(".nav-btn")[currentQuestionIndex]
.classList.add("answered");

scoreDisplay.innerText=score;

nextButton.style.display="block";

}

nextButton.onclick=()=>{

currentQuestionIndex++;

if(currentQuestionIndex<questions.length){

showQuestion();

}else{

finishExam();

}

}

submitBtn.onclick=finishExam;

function finishExam(){

clearInterval(timer);

questionElement.innerText="Exam Completed";

answerButtons.innerHTML="";

reviewSection.innerHTML=
"<h3>Review</h3>";

questions.forEach((q,i)=>{

let div=document.createElement("div");

let correctAnswer=q.answers.find(a=>a.correct).text;

div.innerHTML=
"<b>Q"+(i+1)+":</b> "+q.question+
"<br>Your answer: "+answersRecord[i]+
"<br>Correct answer: "+correctAnswer+
"<br><br>";

reviewSection.appendChild(div);

});

restartBtn.style.display="block";
}

restartBtn.onclick=()=>{

location.reload();

}

function updateProgress(){

let progress=
(currentQuestionIndex/questions.length)*100;

progressBar.style.width=progress+"%";

}

startExam();