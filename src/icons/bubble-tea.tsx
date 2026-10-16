"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17.95 9l-1.478 8.69c-.25 1.463 -.374 2.195 -.936 2.631c-1.2 .931 -6.039 .88 -7.172 0c-.562 -.436 -.687 -1.168 -.936 -2.632l-1.478 -8.689"}],["path",{"d":"M6 9l.514 -1.286a5.908 5.908 0 0 1 10.972 0l.514 1.286"}],["path",{"d":"M5 9h14"}],["path",{"d":"M12 9l4 -7"}],["path",{"d":"M10.01 14h.01"}],["path",{"d":"M11.02 18h.01"}],["path",{"d":"M13.02 16h.01"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2],"o":[12,12.5],"a":-4},{"fx":"pop","n":[3,4,5,6],"a":0.3,"dl":0.12,"st":0.08,"os":[[14,5.5],[10.02,14],[11.02,18],[13.02,16]]}];

export const BubbleTeaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BubbleTeaIcon.displayName = "BubbleTeaIcon";
