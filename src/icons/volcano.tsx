"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 8v-1a2 2 0 1 0 -4 0"}],["path",{"d":"M15 8v-1a2 2 0 1 1 4 0"}],["path",{"d":"M4 20l3.472 -7.812a2 2 0 0 1 1.828 -1.188h5.4a2 2 0 0 1 1.828 1.188l3.472 7.812"}],["path",{"d":"M6.192 15.064a2.14 2.14 0 0 1 .475 -.064c.527 -.009 1.026 .178 1.333 .5c.307 .32 .806 .507 1.333 .5c.527 .007 1.026 -.18 1.334 -.5c.307 -.322 .806 -.509 1.333 -.5c.527 -.009 1.026 .178 1.333 .5c.308 .32 .807 .507 1.334 .5c.527 .007 1.026 -.18 1.333 -.5c.307 -.322 .806 -.509 1.333 -.5c.161 .003 .32 .025 .472 .064"}],["path",{"d":"M12 8v-4"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,15.5],"a":0.06},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,6.5],[17,6.5],[12,15.5],[12,6]]}];

export const VolcanoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VolcanoIcon.displayName = "VolcanoIcon";
