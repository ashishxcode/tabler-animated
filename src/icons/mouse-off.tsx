"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.733 3.704a3.982 3.982 0 0 1 2.267 -.704h4a4 4 0 0 1 4 4v7m-.1 3.895a4 4 0 0 1 -3.9 3.105h-4a4 4 0 0 1 -4 -4v-10c0 -.3 .033 -.593 .096 -.874"}],["path",{"d":"M12 7v1"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,7.5]]}];

export const MouseOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MouseOffIcon.displayName = "MouseOffIcon";
