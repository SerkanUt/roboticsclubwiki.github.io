import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Made with Docusaurus',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Docusaurus is used to make the wiki. Docusarus is an easy-to-use website builder that builds simple documentation sites quickly.  
      </>
    ),
  },
  {
    title: 'Information is accurate and up-to-date',
    Svg: require('@site/static/img/fact-check-svgrepo-com.svg').default,
    description: (
      <>
        The Robotics Club maintains all information accurate and up-to-date. If any information is incorrect, please let the editor know about the Wiki entry so they can correct it.
      </>
    ),
  },
  {
    title: 'Uses easy to learn language',
    Svg: require('@site/static/img/react-svgrepo-com.svg').default,
    description: (
      <>
        Powered by React and MDX, these are simple easy-to-learn languages, if you have trouble there are guides online for you to look at. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
