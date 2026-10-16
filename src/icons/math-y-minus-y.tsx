"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 9l3 5.063"}],["path",{"d":"M8 9l-4.8 9"}],["path",{"d":"M16 9l3 5.063"}],["path",{"d":"M22 9l-4.8 9"}],["path",{"d":"M10 12h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,3],"o":[12.6,13.5],"a":0.06},{"fx":"pop","n":[0,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[3.5,11.53],[17.5,11.53],[12,12]]}];

export const MathYMinusYIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathYMinusYIcon.displayName = "MathYMinusYIcon";
