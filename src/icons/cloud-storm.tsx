"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"}],["path",{"d":"M13 14l-2 4l3 0l-2 4"}]];
const rig: Rig[] = [{"fx":"float","n":[0],"o":[12.4,11.47],"a":1},{"fx":"slide","n":[1],"o":[12.5,18],"d":[0,2],"dl":0.1,"st":0.09}];

export const CloudStormIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CloudStormIcon.displayName = "CloudStormIcon";
