"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M20.964 12.806a9 9 0 0 0 -8.964 -9.806a9 9 0 0 0 -9 9a9 9 0 0 0 9.397 8.991"}],["path",{"d":"M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4"}],["path",{"d":"M14 14l1 -1c.928 -.893 2.072 -.893 3 0"}],["path",{"d":"M16 19.33h6"}],["path",{"d":"M19 16.33v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4,5],"o":[18,17.33],"dl":0.2,"st":0.08},{"fx":"draw","n":[2],"o":[9.5,12.67],"dl":0.05,"st":0.1},{"fx":"pop","n":[1],"o":[12,12],"a":0.05}];

export const PhotoCirclePlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoCirclePlusIcon.displayName = "PhotoCirclePlusIcon";
