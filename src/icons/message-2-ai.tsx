"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 21v-4a2 2 0 1 1 4 0v4"}],["path",{"d":"M14 19h4"}],["path",{"d":"M21 15v6"}],["path",{"d":"M8 9h8"}],["path",{"d":"M8 13h3.5"}],["path",{"d":"M10 19l-1 -1h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4"}]];
const rig: Rig[] = [{"fx":"tilt","n":[5],"o":[12,11.5],"a":-4},{"fx":"pop","n":[0,1,2,3,4],"a":0.3,"dl":0.12,"st":0.08,"os":[[16,18],[16,19],[21,18],[12,9],[9.75,13]]}];

export const Message2AiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Message2AiIcon.displayName = "Message2AiIcon";
