"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21l5 -4l3 -5l5 -2l5 -7"}],["path",{"d":"M16 10h5"}],["path",{"d":"M11 12v-8"}],["path",{"d":"M8 17h7"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[18.5,10],[11,8],[11.5,17]]}];

export const TwigIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TwigIcon.displayName = "TwigIcon";
