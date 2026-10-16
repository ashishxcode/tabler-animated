"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2"}],["path",{"d":"M15 20h-9a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h12"}],["path",{"d":"M7 8v.01"}],["path",{"d":"M7 16v.01"}],["path",{"d":"M20 15l-2 3h3l-2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[19.5,18],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1,2,3],"o":[12,12]}];

export const ServerBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ServerBoltIcon.displayName = "ServerBoltIcon";
