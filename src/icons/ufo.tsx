"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.95 9.01c3.02 .739 5.05 2.123 5.05 3.714c0 2.367 -4.48 4.276 -10 4.276s-10 -1.909 -10 -4.276c0 -1.59 2.04 -2.985 5.07 -3.724"}],["path",{"d":"M7 9c0 1.105 2.239 2 5 2s5 -.895 5 -2v-.035c0 -2.742 -2.239 -4.965 -5 -4.965s-5 2.223 -5 4.965v.035"}],["path",{"d":"M15 17l2 3"}],["path",{"d":"M8.5 17l-1.5 3"}],["path",{"d":"M12 14h.01"}],["path",{"d":"M7 13h.01"}],["path",{"d":"M17 13h.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,13],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,7.5],[16,18.5],[7.75,18.5],[12.01,14],[7.01,13],[17.01,13]]}];

export const UfoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UfoIcon.displayName = "UfoIcon";
