"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 9h8"}],["path",{"d":"M8 13h3.5"}],["path",{"d":"M9.994 19.804l-1.994 1.196v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4"}],["path",{"d":"M14 21v-4a2 2 0 1 1 4 0v4"}],["path",{"d":"M14 19h4"}],["path",{"d":"M21 15v6"}]];
const rig: Rig[] = [{"fx":"tilt","n":[2],"o":[12,12.5],"a":-4},{"fx":"pop","n":[0,1,3,4,5],"a":0.3,"dl":0.12,"st":0.08,"os":[[12,9],[9.75,13],[16,18],[16,19],[21,18]]}];

export const MessageAiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MessageAiIcon.displayName = "MessageAiIcon";
