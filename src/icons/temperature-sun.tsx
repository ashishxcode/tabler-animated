"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5"}],["path",{"d":"M4 9h4"}],["path",{"d":"M13 16a4 4 0 1 0 0 -8a4.07 4.07 0 0 0 -1 .124"}],["path",{"d":"M13 3v1"}],["path",{"d":"M21 12h1"}],["path",{"d":"M13 20v1"}],["path",{"d":"M19.4 5.6l-.7 .7"}],["path",{"d":"M18.7 17.7l.7 .7"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7],"o":[12,21],"a":0.1}];

export const TemperatureSunIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TemperatureSunIcon.displayName = "TemperatureSunIcon";
