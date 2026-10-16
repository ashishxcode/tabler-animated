"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13.905 11.39a2 2 0 1 0 -2.855 2.37"}],["path",{"d":"M9.992 17.779c-2.722 -.621 -5.053 -2.547 -6.992 -5.779c2.4 -4 5.4 -6 9 -6c3.332 0 6.15 1.714 8.454 5.14"}],["path",{"d":"M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296"}]];
const rig: Rig[] = [{"fx":"beat","n":[0,1,2],"o":[12.5,14]}];

export const EyeHeartIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EyeHeartIcon.displayName = "EyeHeartIcon";
