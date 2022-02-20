import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
import pdf from "../../Resume/vivek resume updated.pdf";
import "./About.css";

const About = () => {
  const { name, role, description, social } = about;

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        <a href={pdf} download='My_Resume.pdf'>
          <span type='button' className='btn btn--outline'>
            Resume
          </span>
        </a>

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'>
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                aria-label='linkedin'
                className='link link--icon'>
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
