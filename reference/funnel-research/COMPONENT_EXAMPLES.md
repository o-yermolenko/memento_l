# PRISM Component Examples

Ready-to-use React component patterns for building PRISM interfaces.

---

## Input Components

### Large Text Input (The Void)

```tsx
export function VoidInput({ 
  value, 
  onChange, 
  placeholder = "Just talk." 
}: {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="input-void min-h-[400px] w-full"
      autoFocus
    />
  )
}
```

### Voice Recording Button

```tsx
'use client'
import { useState } from 'react'

export function VoiceButton({ onRecord }: { onRecord: (audio: Blob) => void }) {
  const [isRecording, setIsRecording] = useState(false)
  
  return (
    <button
      onClick={() => setIsRecording(!isRecording)}
      className="relative flex flex-col items-center gap-4"
    >
      <div className={`
        w-20 h-20 rounded-full bg-prism-electric-blue
        transition-all duration-slow
        ${isRecording ? 'animate-pulse-slow scale-110' : 'scale-100'}
      `} />
      
      <span className="text-prism-muted-light text-sm font-refined">
        {isRecording ? 'Recording...' : 'Tap to speak'}
      </span>
    </button>
  )
}
```

---

## Typography Components

### Display Headline

```tsx
export function DisplayHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-display text-6xl md:text-7xl text-prism-white text-balance animate-fade-in">
      {children}
    </h1>
  )
}
```

### Raw Input Display

```tsx
export function RawThought({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-raw text-xl text-prism-white leading-relaxed">
      {children}
    </div>
  )
}
```

### Refined Output Display

```tsx
export function RefinedResponse({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-refined text-lg text-prism-muted-light leading-refined animate-slide-up">
      {children}
    </div>
  )
}
```

---

## Button Components

### Primary CTA

```tsx
export function PrimaryButton({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode
  onClick: () => void 
}) {
  return (
    <button 
      onClick={onClick}
      className="btn-primary"
    >
      {children}
    </button>
  )
}
```

### Secondary Button

```tsx
export function SecondaryButton({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode
  onClick: () => void 
}) {
  return (
    <button 
      onClick={onClick}
      className="btn-secondary"
    >
      {children}
    </button>
  )
}
```

### Text Button

```tsx
export function TextButton({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode
  onClick: () => void 
}) {
  return (
    <button 
      onClick={onClick}
      className="btn-text"
    >
      {children}
    </button>
  )
}
```

---

## Progress Components

### Frequency Wave Progress

```tsx
export function FrequencyWave({ 
  total = 7, 
  current = 0 
}: { 
  total?: number
  current?: number 
}) {
  return (
    <div className="flex gap-1 h-8 items-end justify-center">
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className={`
            w-1 bg-prism-electric-blue transition-all duration-slow
            ${i < current ? 'opacity-100' : 'opacity-30'}
          `}
          style={{
            height: i < current ? '100%' : '30%',
          }}
        />
      ))}
    </div>
  )
}
```

### Animated Wave (Reactive)

```tsx
export function AnimatedWave({ bars = 20 }: { bars?: number }) {
  return (
    <div className="flex gap-1 h-8 items-end">
      {[...Array(bars)].map((_, i) => (
        <div
          key={i}
          className="w-1 bg-prism-electric-blue animate-wave"
          style={{
            animationDelay: `${i * 50}ms`,
            height: '100%',
          }}
        />
      ))}
    </div>
  )
}
```

---

## Layout Components

### The Void Container

```tsx
export function VoidContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="void">
      <div className="max-w-4xl w-full">
        {children}
      </div>
    </div>
  )
}
```

### Onboarding Screen Layout

```tsx
export function OnboardingScreen({ 
  question,
  answers,
  progress,
  total,
  onAnswer
}: {
  question: string
  answers: string[]
  progress: number
  total: number
  onAnswer: (answer: string) => void
}) {
  return (
    <div className="min-h-screen bg-prism-black flex items-center justify-center p-breath">
      <div className="max-w-2xl w-full space-y-pause">
        {/* Question */}
        <h2 className="text-display text-4xl text-prism-white text-balance">
          {question}
        </h2>

        {/* Answers */}
        <div className="space-y-4">
          {answers.map((answer) => (
            <button
              key={answer}
              onClick={() => onAnswer(answer)}
              className="btn-secondary w-full text-left"
            >
              {answer}
            </button>
          ))}
        </div>

        {/* Progress */}
        <FrequencyWave total={total} current={progress} />
      </div>
    </div>
  )
}
```

---

## Effect Components

### Prism Glow Wrapper

```tsx
export function PrismGlow({ children }: { children: React.ReactNode }) {
  return (
    <div className="glow-prism">
      {children}
    </div>
  )
}
```

### Dispersion Effect

```tsx
export function DispersionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="glow-dispersion">
      {children}
    </div>
  )
}
```

---

## Full Page Examples

### Landing Page

```tsx
export default function LandingPage() {
  return (
    <main className="void">
      <div className="max-w-4xl text-center space-y-breath">
        <DisplayHeadline>
          Your mind. Finally unfiltered.
        </DisplayHeadline>
        
        <p className="font-refined text-2xl text-prism-muted-light animate-fade-in text-balance">
          A space where you don't have to translate yourself.
        </p>
        
        <div className="flex gap-4 justify-center animate-fade-in">
          <PrimaryButton onClick={() => console.log('Start')}>
            Start Now
          </PrimaryButton>
          <SecondaryButton onClick={() => console.log('Learn')}>
            Learn More
          </SecondaryButton>
        </div>
      </div>
    </main>
  )
}
```

### Text Input Screen

```tsx
'use client'
import { useState } from 'react'

export default function InputScreen() {
  const [value, setValue] = useState('')
  
  return (
    <VoidContainer>
      <div className="space-y-pause">
        <h2 className="text-display text-3xl text-prism-white">
          What's on your mind?
        </h2>
        
        <VoidInput 
          value={value}
          onChange={setValue}
          placeholder="Just talk. No filter."
        />
        
        <div className="flex justify-between items-center">
          <TextButton onClick={() => setValue('')}>
            Clear
          </TextButton>
          <PrimaryButton onClick={() => console.log('Submit', value)}>
            Continue
          </PrimaryButton>
        </div>
      </div>
    </VoidContainer>
  )
}
```

### Conversation View (User + AI)

```tsx
export default function ConversationView() {
  return (
    <div className="min-h-screen bg-prism-black p-breath">
      <div className="max-w-3xl mx-auto space-y-void">
        {/* User's raw input */}
        <div className="space-y-4">
          <span className="text-prism-muted text-sm">You</span>
          <RawThought>
            i don't know why but i just feel really stuck lately
            like i know what i should do but i can't make myself do it
          </RawThought>
        </div>
        
        {/* AI's refined response */}
        <div className="space-y-4">
          <span className="text-prism-muted text-sm">Prism</span>
          <RefinedResponse>
            It sounds like you're experiencing a disconnect between clarity 
            and action. You understand the path forward, but something is 
            blocking execution. This is often less about motivation and more 
            about unresolved resistance - what are you protecting by staying stuck?
          </RefinedResponse>
        </div>
      </div>
    </div>
  )
}
```

### Voice Recording Screen

```tsx
'use client'
import { useState } from 'react'

export default function VoiceScreen() {
  const [isRecording, setIsRecording] = useState(false)
  
  return (
    <VoidContainer>
      <div className="text-center space-y-breath">
        <h2 className="text-display text-3xl text-prism-white text-balance">
          Tell me what's going on.
        </h2>
        
        <VoiceButton onRecord={(audio) => console.log('Recorded', audio)} />
        
        {isRecording && (
          <div className="space-y-4 animate-fade-in">
            <AnimatedWave bars={15} />
            <p className="text-prism-muted-light text-sm">
              Listening...
            </p>
          </div>
        )}
      </div>
    </VoidContainer>
  )
}
```

---

## State Patterns

### Loading State

```tsx
export function LoadingState() {
  return (
    <div className="void">
      <div className="text-center space-y-pause">
        <AnimatedWave bars={10} />
        <p className="text-prism-muted-light font-refined">
          Processing...
        </p>
      </div>
    </div>
  )
}
```

### Empty State

```tsx
export function EmptyState() {
  return (
    <div className="void">
      <div className="text-center space-y-pause max-w-md">
        <p className="text-prism-muted-light font-refined text-lg">
          Nothing here yet.
        </p>
        <p className="text-prism-muted text-sm">
          Start by sharing what's on your mind.
        </p>
      </div>
    </div>
  )
}
```

### Error State

```tsx
export function ErrorState({ message }: { message: string }) {
  return (
    <div className="void">
      <div className="text-center space-y-pause max-w-md">
        <p className="text-prism-white font-refined text-lg">
          Something went wrong.
        </p>
        <p className="text-prism-muted text-sm">
          {message}
        </p>
        <PrimaryButton onClick={() => window.location.reload()}>
          Try Again
        </PrimaryButton>
      </div>
    </div>
  )
}
```

---

## Animation Patterns

### Delayed Fade In

```tsx
export function DelayedContent({ 
  delay = 300,
  children 
}: { 
  delay?: number
  children: React.ReactNode 
}) {
  return (
    <div 
      className="animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
```

### Staggered List

```tsx
export function StaggeredList({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="animate-slide-up"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <p className="font-refined text-prism-white">{item}</p>
        </div>
      ))}
    </div>
  )
}
```

---

## Usage Tips

1. **Always use the void** - `<VoidContainer>` or `.void` class for full-screen layouts
2. **Font families matter** - `font-raw` for user input, `font-refined` for AI output
3. **Animations are slow** - All transitions should feel deliberate (300-500ms)
4. **Spacing is generous** - Use `space-breath`, `space-void`, `space-pause`
5. **Colors are minimal** - Black background, white text, electric blue accent only
6. **No chat bubbles** - Keep conversations linear, not back-and-forth
7. **Trust the emptiness** - Don't fill space just because it's there

---

See `DESIGN_SYSTEM.md` for complete documentation.

