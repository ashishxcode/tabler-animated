"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3.6 15h10.55"}],["path",{"d":"M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098"}],["path",{"d":"M7.395 7.534l2.416 7.438"}],["path",{"d":"M17.032 4.636l-4.852 3.526m-2.334 1.695l-1.349 .98"}],["path",{"d":"M20.559 14.51l-8.535 -6.201"}],["path",{"d":"M12.257 20.916l2.123 -6.533m.984 -3.028l.154 -.473"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,2,3,4,5],"a":0.25,"st":0.08,"os":[[8.88,15],[8.6,11.25],[12.76,7.74],[16.29,11.41],[13.89,15.9]]},{"fx":"tilt","n":[1],"o":[12,12],"a":-3}];

export const ApertureOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ApertureOffIcon.displayName = "ApertureOffIcon";
