"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20h16"}],["path",{"d":"M4 16v-.01"}],["path",{"d":"M20 16v-.01"}],["path",{"d":"M4 12v-.01"}],["path",{"d":"M20 12v-.01"}],["path",{"d":"M4 8v-.01"}],["path",{"d":"M20 8v-.01"}],["path",{"d":"M4 4v-.01"}],["path",{"d":"M8 4v-.01"}],["path",{"d":"M12 4v-.01"}],["path",{"d":"M16 4v-.01"}],["path",{"d":"M20 4v-.01"}],["path",{"d":"M15 12h-6"}],["path",{"d":"M12 9v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[20,16],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,20],"a":0.06},{"fx":"pop","n":[1,3,4,5,6,7,8,9,10,11,12,13],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,16],[4,12],[20,12],[4,8],[20,8],[4,4],[8,4],[12,4],[16,4],[20,4],[12,12],[12,12]]}];

export const BorderBottomPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BorderBottomPlusIcon.displayName = "BorderBottomPlusIcon";
