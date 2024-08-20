import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Framework',
    image: require('@site/static/img/framework.png').default,
    description: (
      <>
        Easy to use inside your own projects as a dependency. 
        Define your jobs the way you want and let CronFrame take care of the rest.
      </>
    ),
  },
  {
    title: 'CLI Tool',
    image: require('@site/static/img/clitool.png').default,
    description: (
      <>
        CronFrame is also a tool you can install with <code>cargo</code> and setup to suit your needs.
        Easily create jobs from new code weather it is a standalone file or a crate.
      </>
    ),
  },
  {
    title: 'Macro Annotations',
    image: require('@site/static/img/macros.png').default,
    description: (
      <>
        Job definition made easier with macro annotations. 
        Just pick a type of job between Global, Function and Method and use the corresponding macros.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} />
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
