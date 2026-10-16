"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 4v16"}],["path",{"d":"M14 4v16"}],["path",{"d":"M6 4v5"}],["path",{"d":"M6 15v5"}],["path",{"d":"M10 4v5"}],["path",{"d":"M11 9h-6v6h6l0 -6"}],["path",{"d":"M10 15v5"}],["path",{"d":"M8 12h-.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[16,12],"a":0.06},{"fx":"pop","n":[2,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,6.5],[6,17.5],[10,6.5],[8,12],[10,17.5],[8,12]]}];

export const PrisonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PrisonIcon.displayName = "PrisonIcon";
