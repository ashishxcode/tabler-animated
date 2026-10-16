"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.986 12.51a9 9 0 1 0 -5.71 7.873"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h10.9"}],["path",{"d":"M11.5 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3a17 17 0 0 1 0 18"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[5,6],"o":[19,19.01],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"draw","n":[1,2,3,4],"o":[12,12],"dl":0.1,"st":0.1}];

export const WorldExclamationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WorldExclamationIcon.displayName = "WorldExclamationIcon";
