import { Skill } from '@prisma/client';
import SkillsCard from './SkillsCard';

const SkillsList = ({ skills }: { skills: Skill[] }) => {
  return (
    <ul className="flex flex-col space-y-6">
      {skills.length > 0 ? (
        skills.map((skill, index) => (
          <SkillsCard
            key={String(index) + skill.name}
            confidence={skill.confidence}
            lastUpdated={skill.lastUpdated}
            name={skill.name}
            progress={skill.progress}
            skillLevel={skill.skillLevel}
          />
        ))
      ) : (
        <span className="text-center">No User Skills Found</span>
      )}
    </ul>
  );
};

export default SkillsList;
