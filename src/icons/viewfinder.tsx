"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M12 3l0 4"}],["path",{"d":"M12 21l0 -3"}],["path",{"d":"M3 12l4 0"}],["path",{"d":"M21 12l-3 0"}],["path",{"d":"M12 12l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[12,19.5],[5,12],[19.5,12],[12,12.01]]}];

export const ViewfinderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ViewfinderIcon.displayName = "ViewfinderIcon";
