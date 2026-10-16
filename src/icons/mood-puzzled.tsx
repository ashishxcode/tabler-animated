"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14.986 3.51a9 9 0 1 0 1.514 16.284c2.489 -1.437 4.181 -3.978 4.5 -6.794"}],["path",{"d":"M10 10h.01"}],["path",{"d":"M14 8h.01"}],["path",{"d":"M12 15c1 -1.333 2 -2 3 -2"}],["path",{"d":"M20 9v.01"}],["path",{"d":"M20 6a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12],"a":-5},{"fx":"pop","n":[1,2,3,4,5],"a":0.3,"dl":0.12,"st":0.07,"os":[[10,10],[14.01,8],[13.5,14],[20,9],[20.25,4]]}];

export const MoodPuzzledIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoodPuzzledIcon.displayName = "MoodPuzzledIcon";
