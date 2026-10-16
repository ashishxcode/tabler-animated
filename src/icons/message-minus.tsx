"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 9h8"}],["path",{"d":"M8 13h6"}],["path",{"d":"M11.976 18.614l-3.976 2.386v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"tilt","n":[2],"o":[12,12.5],"a":-4},{"fx":"pop","n":[0,1],"a":0.3,"dl":0.12,"st":0.08,"os":[[12,9],[11,13]]}];

export const MessageMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MessageMinusIcon.displayName = "MessageMinusIcon";
