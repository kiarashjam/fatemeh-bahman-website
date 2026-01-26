import { LessonsHero } from '@/components/sections/lessons/LessonsHero'
import { LessonTabs } from '@/components/sections/lessons/LessonTabs'
import { LessonLevels } from '@/components/sections/lessons/LessonLevels'
import { LessonFormat } from '@/components/sections/lessons/LessonFormat'
import { SamplePlans } from '@/components/sections/lessons/SamplePlans'

export const metadata = {
  title: 'Lessons - Fatemeh Bahman',
  description: 'Comprehensive Persian language lessons covering reading, writing, conversation, grammar, and culture.',
}

export default function LessonsPage() {
  return (
    <>
      <LessonsHero />
      <LessonTabs />
      <LessonLevels />
      <LessonFormat />
      <SamplePlans />
    </>
  )
}
