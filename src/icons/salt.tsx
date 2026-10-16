"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 13v.01"}],["path",{"d":"M10 16v.01"}],["path",{"d":"M14 16v.01"}],["path",{"d":"M7.5 8h9l-.281 -2.248a2 2 0 0 0 -1.985 -1.752h-4.468a2 2 0 0 0 -1.986 1.752l-.28 2.248"}],["path",{"d":"M7.5 8l-1.612 9.671a2 2 0 0 0 1.973 2.329h8.278a2 2 0 0 0 1.973 -2.329l-1.612 -9.671"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12,14],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,13.01],[10,16.01],[14,16.01],[12,6]]}];

export const SaltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SaltIcon.displayName = "SaltIcon";
