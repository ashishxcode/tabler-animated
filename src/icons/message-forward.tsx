"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12"}],["path",{"d":"M13 8l3 3l-3 3"}],["path",{"d":"M16 11h-8"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12.5],"a":-4},{"fx":"pop","n":[1,2],"a":0.3,"dl":0.12,"st":0.08,"os":[[14.5,11],[12,11]]}];

export const MessageForwardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MessageForwardIcon.displayName = "MessageForwardIcon";
